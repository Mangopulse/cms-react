
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="transparent" onClick={this.toggle}> 
                                    <i className="fa fa-search"></i>
                                    إبحث
                                  </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <div b-fjwotxpclx="" className="modal-dialog">
  <div b-fjwotxpclx="" className="modal-content">
    <button
      b-fjwotxpclx=""
      type="button"
      className="close"
      data-dismiss="modal"
      aria-label="Close"
    >
      <span b-fjwotxpclx="" aria-hidden="true" >×</span>
    </button>
    <div b-fjwotxpclx="" id="modal-wizard-container">
      <div b-fjwotxpclx="" className="modal-header">
        <h5 b-fjwotxpclx="" className="modal-title h4"></h5>
      </div>

      <div b-fjwotxpclx="" className="modal-body make-rtl">
        <form
          action="/Posts/Browse"
          data-container="#post-results"
          data-dontdisablesbuttons="true"
          method="get"
        >
          <div className="well" style={{padding: 5+"px"}}>
            <div className="row">
              <div className="col-sm-6">
                <label for="Query">إبحث عن</label>
                <input
                  className="form-control col-12"
                  type="text"
                  id="Query"
                  name="Query"
                  placeholder="....."
                />
                <input
                  type="hidden"
                  id="allowedCount"
                  name="allowedCount"
                  value="1"
                />
                <input
                  type="hidden"
                  name="ParentHandler"
                  value="window.back.pages.postmodule"
                />
                <input type="hidden" name="Code" />
                <input
                  type="hidden"
                  name="ReturnValue"
                  value="ArticleAuthor:Author"
                />
              </div>
              <div className="col-sm-4">
                <label>نوع المنشور</label>
                <select
                  name="Type"
                  id="Type"
                  className="form-control col-12"
                  multiple=""
                  size="5"
                >
                  <option value="author">Author</option>
                </select>
              </div>

              <div className="col-sm-2">
                <label className="col-12">&nbsp;</label>
                <button type="submit" className="btn btn-new info">
                  <i className="fa fa-search"></i>بحث
                </button>
              </div>
            </div>
            <input type="hidden" name="SearchRequest" value="true" />
          </div>
          <input type="hidden" name="MainRequest" value="false" />
          <input type="hidden" name="Type" />
          <input type="hidden" name="Types" value="author" />
          <input type="hidden" name="Term" />
          <input type="hidden" name="Terms" />
        </form>
        <div id="search_results" data-type="">
          <div
            className="data-table"
            style={{height: 300+"px", overflowY: "scroll", paddingLeft: 10+"px"}}
            data-size="20"
            data-moreurl="/Posts/Browse?Types=author&amp;OrderBy=CreationDate%20DESC&amp;Page=1&amp;MainRequest=True&amp;SearchRequest=False&amp;ReturnValue=ArticleAuthor%3AAuthor&amp;AllowedCount=1&amp;ParentHandler=window.back.pages.postmodule&amp;ThisYear=False&amp;SubscriptionId=00000000-0000-0000-0000-000000000000"
          >
            <table className="table">
              <thead>
                <tr>
                  <th>عنوان</th>
                  <th>النوع</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="post-results">
                <tr>
                  <td>
                    <div className="imglist profile-picture pull-right">
                      <img
                        alt="Author"
                        src=""
                        style={{cursor: "pointer"}}
                        className="imagelabel"
                        data-index="0"
                      />
                    </div>

                    <label>
                      <input
                        type="radio"
                        className="listselector"
                        name="listselector"
                        id="listselector-0"
                        style={{cursor: "pointer", margin: 8+"px"}}
                        data-posttitle="Author"
                        data-posttypeid="35bc8940-ed6b-11ec-858c-5cbaef4b6f65"
                        data-posttypecode="author"
                        data-postid="31f97cb6-08fa-11ed-a81d-000d3aa9c700"
                        data-postpublicid="216"
                        data-postimage=""
                        data-postdate="7/21/2022 1:37:00 PM"
                        data-lastmodified="7/21/2022 1:37:00 PM"
                        data-creationdate="7/21/2022 1:37:00 PM"
                        data-createdby="b81649e8-ee1c-11ec-a81d-000d3aa9c700"
                        data-modifiedby="b81649e8-ee1c-11ec-a81d-000d3aa9c700"
                      />
                      Author
                    </label>
                    <div className="text margin-top-4">
                      <span></span>
                      <span className="statusLabel"
                        ><span className="label label-info"
                          ><i className="ace-icon fa fa-bolt bigger-120"></i>
                          New</span
                        ></span
                      >
                    </div>
                  </td>

                  <td>Author</td>

                  <td>
                    <a
                      className="notajax"
                      target="_blank"
                      href="/Posts/author/Preview/216"
                    >
                      <i className="purple ace-icon fa fa-eye"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="imglist profile-picture pull-right">
                      <img
                        alt="Clark Jones"
                        src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg?preset=ace-thumbnail"
                        style={{cursor: "pointer"}}
                        className="imagelabel"
                        data-index="1"
                      />
                    </div>

                    <label>
                      <input
                        type="radio"
                        className="listselector"
                        name="listselector"
                        id="listselector-1"
                        style={{cursor: "pointer", margin: 8+"px"}}
                        data-posttitle="Clark Jones"
                        data-posttypeid="35bc8940-ed6b-11ec-858c-5cbaef4b6f65"
                        data-posttypecode="author"
                        data-postid="470fdf05-f07d-11ec-9860-30d16bee5962"
                        data-postpublicid="59"
                        data-postimage="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg?preset=ace-thumbnail"
                        data-postdate="7/1/2022 6:40:05 AM"
                        data-lastmodified="7/1/2022 6:40:05 AM"
                        data-creationdate="6/20/2022 9:42:20 AM"
                        data-createdby="0b42217b-e575-49e3-8482-a37100cd76df"
                        data-modifiedby="0b42217b-e575-49e3-8482-a37100cd76df"
                      />
                      Clark Jones
                    </label>
                    <div className="text margin-top-4">
                      <span></span>
                      <span className="statusLabel"
                        ><span className="label label-success"
                          ><i className="ace-icon fa fa-check bigger-120"></i>
                          Published</span
                        ></span
                      >
                    </div>
                  </td>

                  <td>Author</td>

                  <td>
                    <a
                      className="notajax"
                      target="_blank"
                      href="/Posts/author/Preview/59"
                    >
                      <i className="purple ace-icon fa fa-eye"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="imglist profile-picture pull-right">
                      <img
                        alt="John Smith"
                        src="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg?preset=ace-thumbnail"
                        style={{cursor: "pointer"}}
                        className="imagelabel"
                        data-index="2"
                      />
                    </div>

                    <label>
                      <input
                        type="radio"
                        className="listselector"
                        name="listselector"
                        id="listselector-2"
                        style={{cursor: "pointer", margin: 8+"px"}}
                        data-posttitle="John Smith"
                        data-posttypeid="35bc8940-ed6b-11ec-858c-5cbaef4b6f65"
                        data-posttypecode="author"
                        data-postid="19bed437-f07d-11ec-9860-30d16bee5962"
                        data-postpublicid="58"
                        data-postimage="https://as-mangopulse-media.azurewebsites.net/store/archive/image/2022/7/1/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg?preset=ace-thumbnail"
                        data-postdate="7/1/2022 6:40:51 AM"
                        data-lastmodified="7/1/2022 6:40:51 AM"
                        data-creationdate="6/20/2022 9:41:04 AM"
                        data-createdby="0b42217b-e575-49e3-8482-a37100cd76df"
                        data-modifiedby="0b42217b-e575-49e3-8482-a37100cd76df"
                      />
                      John Smith
                    </label>
                    <div className="text margin-top-4">
                      <span></span>
                      <span className="statusLabel"
                        ><span className="label label-success"
                          ><i className="ace-icon fa fa-check bigger-120"></i>
                          Published</span
                        ></span
                      >
                    </div>
                  </td>

                  <td>Author</td>

                  <td>
                    <a
                      className="notajax"
                      target="_blank"
                      href="/Posts/author/Preview/58"
                    >
                      <i className="purple ace-icon fa fa-eye"></i>
                    </a>
                  </td>
                </tr>
        
              </tbody>
            </table>
          </div>
          <div className="paging-wrapper">
            <div className="p-block make-rtl">
              <input
                type="number"
                className="size-input"
                max="100"
                min="10"
                step="10"
                data-bind="value: size, event:{ change: changesize}"
              />سطر في الصفحة
            </div>
            <div className="p-block"><span className="from-to"></span></div>
            <div className="p-block">
              <div className="input-group">
                <span className="input-group-addon" data-bind="click: previous"
                  ><i className="fa fa-chevron-right"></i></span
                ><input
                  type="text"
                  className="form-control page-input"
                  data-bind="value: fetchingPage, event:{ change: changepage}"
                /><span className="input-group-addon" data-bind="click: next"
                  ><i className="fa fa-chevron-left"></i
                ></span>
              </div>
            </div>
            <span className="clearfix"></span>
          </div>
        </div>

       
      </div>
    </div>
    <div b-fjwotxpclx="" className="modal-footer">
    
    </div>
  </div>
</div>
          <ModalFooter className='make-rtl'>
          <button type="button" className="btn-new success " data-dismiss="modal">
        <i className="fa fa-check "></i>التالي
      </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;