/*
 *
 * This is the boring glue for the Resumable.js-based uploader.
 *
 * For the interesting stuff, see
 * http://www.23developer.com/opensource
 * http://github.com/23/resumable.js
 *
 * Steffen Tiedemann Christensen, steffen@23company.com
 * 
 * Edited by: Ahmad Dekmak 2012/03/04, source-code@hotmail.com
 * Edited by: Kassem Shehade 2014
 *
 */

(function (window, document, $, undefined) {
    window.ResumableUploader = function (uploaderId, uploadToken, savedData, browseTarget, dropTarget, progressContainer, uploadUrl, commitUrl, filter, filterType, handler, maxFileSize) {
        var $this = this;

        this.uploaderId = uploaderId;
        this.appKey = "";
        this.scope = "";
        this.handler = handler;

        this.uploadUrl = uploadUrl;
        this.commitUrl = commitUrl;

        this.filter = filter;
        this.filterType = filterType;

        // Bootstrap parameters and clear HTML
        this.upload_token = uploadToken;
        this.savedData = savedData;
        this.browseTarget = browseTarget;
        this.dropTarget = dropTarget;

        this.progressContainer = progressContainer;
        this.progressContainer.hide();

        //this.uploaderList = uploaderList;
        //this.uploaderListHTML = uploaderList.html();
        //this.uploaderList.empty();
        //this.uploaderList.show();

        // Defaults
        // Properties
        this.resumable = null;
        this.progress = 0;
        this.progressPercent = 0;
        this.files = {};
        this.fileCount = 0;
        this.maxFileSize = maxFileSize === "" || maxFileSize === 0 ? undefined : maxFileSize ;

        // Initialization routines
        this.bootstrapResumable = function () {
            // Build the uploader application
            this.resumable = new Resumable({
                chunkSize: 1 * 1024 * 1024,
                maxChunkRetries: 10,
                chunkRetryInterval: 100,
                simultaneousUploads: 4,
                permanentErrors: [404, 415, 501],
                target: this.uploadUrl,
                // commitUrl: this.commitUrl,
                query: { upload_token: this.upload_token },
                prioritizeFirstAndLastChunk: true,
                throttleProgressCallbacks: 1,
                filter: this.filter,
                filterType: this.filterType,
                scope: this.scope,
                appKey: this.appKey, 
                generateUniqueIdentifier: function () {
                    var dateObject = new Date();
                    var uniqueId = dateObject.getFullYear() + '' +
                        (dateObject.getMonth() + 1) + '' +
                        dateObject.getDate() + '_' +
                        dateObject.getTime() + '_' +
                        (Math.random() * 10000);
                    return uniqueId;
                },
                maxFileSize: this.maxFileSize
            });

            if (!this.resumable.support) {
                $this.dropTarget.hide();
                //$this.uploaderList.html("<div class='upload-message error'>Upload not supported in this browser !!</div>");
                return;
            }
            this.resumable.assignBrowse(this.browseTarget);
            this.resumable.assignDrop(this.dropTarget);

            this.resumable.on('fileError', function (file, message) {
                $this.setFileUploadStatus(file.uniqueIdentifier, 'error', message);
                $this.setFileProgress(file.uniqueIdentifier, -1);
                if ($this.handler && typeof $this.handler == "function") {
                    $this.handler("error", $this.uploaderId, message);
                }
                else if (eval("typeof window.back.pages.mediaupload.resumableUploadError == 'function'")) {
                    window.back.pages.mediaupload.resumableUploadError($this.uploaderId, message);
                }
            });
            this.resumable.on('fileSuccess', function (file, message) {

                $this.setFileUploadStatus(file.uniqueIdentifier, 'completed', '');
                $this.setFileProgress(file.uniqueIdentifier, 1);
                /*$this.uploaderList.html("<div class='upload-message success'>" + data.message + "</div>");*/
                if ($this.handler && typeof $this.handler == "function") {
                    $this.handler("complete", $this.uploaderId, message);
                }
                else if (eval("typeof window.back.pages.mediaupload.resumableUploadComplete == 'function'")) {
                    var data = $.parseJSON(message);
                    $this.progressContainer.find('.alert-success').show();
                    $this.progressContainer.find('.alert-success').html(data.name);
                    $this.progressContainer.find('.btn-group .btn').addClass('disabled');
                    $this.progressContainer.find('.btn-group .btn').attr('disabled', 'disabled');

                    window.back.pages.mediaupload.resumableUploadComplete($this.uploaderId, message);
                }
            });
            this.resumable.on('fileProgress', function (file) {
                $this.setFileProgress(file.uniqueIdentifier, file.progress());
                $this.setProgress($this.resumable.progress());

                //                // Apply a thumbnail
                //  if (file.chunks.length > 0 && file.chunks[0].status() == 'success' && file.chunks[file.chunks.length - 1].status() == 'success') {
                //      $this.setFileThumbnail(file.uniqueIdentifier, this.thumbnailUrl + '?time=10&upload_token=' + encodeURIComponent($this.upload_token) + '&resumableIdentifier=' + encodeURIComponent(file.uniqueIdentifier));
                //  }
            });
            this.resumable.on('complete', function (file) {
            });
            this.resumable.on('pause', function (file) {
                $this.progressContainer.removeClass('is-completed');
                $this.progressContainer.addClass('is-paused');
            });
            this.resumable.on('fileRetry', function (file) {
            });
            this.resumable.on('fileAdded', function (file) {
                // Remove navigation

                //$('h1, #sidebar, .bottomhelp').remove();
                $('.FileUploadAdded').val("Added"); //for safety
                // $('#main').removeClass('withsidebar');
                // Add the file
                $this.addFile(file);
                // We want to upload when files are added
                $this.progressContainer.show();
                $this.resumable.upload();
                $this.dropTarget.hide();
            });
        }; /* METHODS */
        this.setProgress = function (progress) {
            $this.progressContainer.removeClass('is-paused is-completed');
            if (progress >= 1) $this.progressContainer.addClass('is-completed');

            $this.progress = progress;
            $this.progressPercent = Math.floor(Math.floor(progress * 100.0));

            $this.progressContainer.find('#progress-text').html($this.progressPercent + ' %');
            $this.progressContainer.find('.progress-bar').css({ width: $this.progressPercent + '%' });
            if (progress > 0.5)
                $this.progressContainer.find('#progress-text').css({ color: 'white' });
            else
                $this.progressContainer.find('#progress-text').css({ color: 'black' });

        }; // Add a new file (or rather: glue between newly added resumable files and the UI)
        this.addFile = function (resumableFile) {
            // A list and and edit item for the UI
            //var listNode = $(document.createElement('div'));
            //listNode.html(this.uploaderListHTML);
            //this.uploaderList.append(listNode);

            // Record the new file (uploadStatus=[uploading|completed|error], editStatus=[editing|saving|saved])
            var identifier = resumableFile.uniqueIdentifier;
            if (this.savedData[identifier]) {
                var x = this.savedData[identifier];
                var editStatus = 'saved';
            } else {
                var x = {};
                var editStatus = 'editing';
            }
            var file = {
                resumableFile: resumableFile,
                //listNode: listNode,
                fileName: resumableFile.fileName,
                title: x.title || resumableFile.fileName,
                description: x.description || '',
                tags: x.tags || '',
                published: (x.publish == 1 ? true : false),
                album_id: x.album_id || '',
                album_label: x.album_label || '',
                editStatus: 'editing',
                uploadStatus: 'uploading',
                errorMessage: '',
                thumbnailUrl: '',
                progress: 0,
                progressPercent: '0 %',
                fileSize: resumableFile.size,
                fileSizeFmt: Math.round((resumableFile.size / 1024.0 / 1024.0) * 10.0) / 10.0 + ' MB'
            };
            this.files[identifier] = file;
            this.fileCount++;
            this.reflectFile(identifier);
            this.reflectFileForm(identifier);

        }; // Cancel a file an remove the 
        this.removeFile = function (identifier) {
            if (!this.files[identifier]) return;
            var f = this.files[identifier];

            //this.uploaderList[0].removeChild(f.listNode[0]);
            f.resumableFile.cancel();
            delete this.files[identifier];
            this.fileCount--;
        }; // Update for the file
        this.reflectFileForm = function (identifier) {
            if (!this.files[identifier]) return;
            var f = this.files[identifier];
        }; // Update UI to reflect the status of the object
        this.reflectFile = function (identifier) {
            if (!this.files[identifier]) return;
            var f = this.files[identifier];

            var allStatusClasses = 'is-uploading is-completed is-error is-editing is-saving is-saved';

            //// List
            //f.listNode.find('.uploader-item-title').html(f.title);
            //f.listNode.removeClass(allStatusClasses);
            //f.listNode.addClass(['is-' + f.uploadStatus, 'is-' + f.editStatus].join(' '));
        }; // Update file with thumbnails
        this.setFileThumbnail = function (identifier, url) {
            if (!this.files[identifier] || this.files[identifier].thumbnailUrl.length > 0) return;
            url += '&_=' + Math.random();
            this.files[identifier].thumbnailUrl = url;
            //this.files[identifier].listNode.find('img.uploader-item-thumbnail').each(function (i, img) {
            //    $(img).attr('src', url);
            //});
        }; // Update file progress
        this.setFileProgress = function (identifier, progress) {
            if (!this.files[identifier]) return;
            var f = this.files[identifier];

            f.progress = progress;
            f.progressPercent = Math.floor(Math.round(progress * 100.0));

            //// Update progress icon
            //f.listNode.find('img.uploader-item-status').each(function (i, img) {
            //    $(img).attr('src', (f.uploadStatus == 'error' ? '/resources/um/graphics/uploader/error.png' : (f.uploadStatus == 'complete' || progress >= 1 ? '/resources/um/graphics/uploader/done.png' : '/resources/um/graphics/uploader/uploaded-' + (Math.floor(progress * 10.0) * 10.0) + '.png')));
            //});
        }; // Update file upload status
        this.setFileUploadStatus = function (identifier, uploadStatus, errorMessage) {
            if (!this.files[identifier]) return;
            this.files[identifier].uploadStatus = uploadStatus;
            this.files[identifier].errorMessage = errorMessage;
            $this.reflectFile(identifier);
        }; // Init for real
        this.bootstrapResumable();
        return this;
    };
})(window, window.document, $);