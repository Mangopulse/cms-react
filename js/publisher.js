window.back.publisher = (function($, ko) {
    var viewmodel,
        PublisherModel = function () {
            var self = this;
            self.posts = ko.observableArray();
            self.otherposts = ko.observableArray();
            var initModel = function(data) {
                self.posts(importPosts(data.Posts));
                self.otherposts(importPosts(data.OtherPosts));
                },
                removePost = function(data) {
                    confirm(window.AppResources.AreYouSureToDelete, function (result) {
                        if (result) {
                            var existing = jQuery.grep(self.otherposts(), function (p) {
                                return p.Id == data.Id;
                            });
                            if (existing.length == 0) {
                                self.otherposts.unshift(data);
                            }
                            self.posts.remove(data);
                        }
                    });
                    return false;
                },
                addPost = function(data) {
                    self.posts.push(new PostItem(data));
                },
                nameForInput = function (index, field) {
                    return 'Posts[' + index + '].' + field;
                },
                order = function (index) {
                    return viewmodel.posts().length - index;
                };
            return {
                init: initModel,
                removePost: removePost,
                addPost: addPost,
                posts: self.posts,
                otherposts: self.otherposts,
                nameForInput: nameForInput,
                order: order
            };
        },
        PostItem = function (data) {
            var self = this;
            data = data || {};
            self.Id = data.Id;
            self.Title = data.Title;
            self.Date = (data.PostDate ? data.PostDate : data.LastModified).substring(0, 19).replace("T", " ");
            self.Summary = data.Summary;
            self.Image = new MediaItem(data.CoverImage);
            self.Order = data.Order;
            self.Status = data.Status;
            
            self.PreviewUrl = "/Posts/" +  data.PostType.Code + "/Preview/" + data.PublicId;
        },
        MediaItem = function(data) {
            var self = this;
            data = data || {};
            self.Url = data.MediaUrl ? "//" + addPreset(data.MediaUrl, "ace-thumbnail") : JS_CONFIG.ImageNotFound;
            self.Id = data.Id;
        },


        init = function (data) {
            viewmodel = new PublisherModel();
            data = $.parseJSON(Base64.decode(data));
            viewmodel.init(data);
            ko.applyBindings(viewmodel, $("#PublisherForm")[0]);
        },
        importPosts = function (list) {
            return $.map(list || [],
                function(item) {
                    return new PostItem(item);
                });
        },
        handleBrowseCallback = function (data) {
            for (var i = 0; i < data.length; i++) {
                var record = data[i];
                var post = {
                    Id: record.PostId, Title: record.Title, CoverImage: { MediaUrl: record.Image },
                    PostDate: record.Date, PublicId: record.PublicId, PostType: {Code: record.PostTypeCode}
                };
                var existing = jQuery.grep(viewmodel.posts(), function(p) {
                    return p.Id == post.Id;
                });
                if (existing.length == 0) {
                    viewmodel.posts.unshift(new PostItem(post));
                }
            }

        };
    return {
        init: init,
        handleBrowseCallback: handleBrowseCallback
    };
}(jQuery, ko));