import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Item, threes } from "../util";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sortable = () => {
  const [list, setList] = useState(threes);
  return (
    <ReactSortable
    className="make-rtl"
      filter=".filter"
      list={list}
      setList={setList}
      animation={150}
    >
      {list.map((val) => (
        <CustomItem key={val.id}>
                
                          <div className="profile-activity clearfix">
                            <div className="make-rtl">
                              <img
                                className="pull-right"
                                style={{
                                  borderRadius: 0,
                                  width: 250 + "px",
                                  maxWidth: 250 + "px",
                                  height: "auto",
                                }}
                                data-bind="attr{src: CoverImage ? '//' + addParameter(CoverImage.MediaUrl, 'width', '250') : JS_CONFIG.ImageNotFound + '?width=250'}"
                                src={val.image}
                              />
                              <div
                                className="boldclassName"
                                data-bind="text: Title"
                              >
                               {val.title}
                              </div>
                              <div data-bind="text: Summary">
                               {val.description}
                              </div>
                              <div
                                style={{ textAlign: "right", direction: "rtl" }}
                              >
                                <span>
                                  <b>تمت إضافتة:</b>{" "}
                                  <span data-bind="text: CreationDate">
                                    {val.added_date}
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(CreatedBy)">
                                    --
                                  </span>
                                </span>
                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>تعديل:</b>{" "}
                                  <span data-bind="text: LastModified">
                                   {val.edited_date}
                                  </span>{" "}
                                  -{" "}
                                  <span data-bind="text: getUserById(ModifiedBy)">
                                    --
                                  </span>
                                </span>

                                <span>
                                  {" "}
                                  &nbsp;|&nbsp;<b>التاريخ:</b>{" "}
                                  <span data-bind="text: PostDate">
                                    {val.date}
                                  </span>
                                </span>
                              </div>
                              <span className="make-rtl">
                                <span data-bind="html: StatusLabel">
                                  <span className="label label-success">
                                  <i className={val.button_icon}></i>
                                    {val.button}
                                  </span>
                                </span>
                              </span>
                            </div>
                            <div className="tools action-buttons make-rtl">
                              <Link
                                to="/slidereyeclick"
                                className="purple make-rtl"
                               
                              >
                                <i className={val.eye_icon}></i>
                              </Link>
                              <a
                                href="#"
                                className="red make-rtl"
                                data-bind="click:$parent.removeResult"
                              >
                                <i className={val.times_icon}></i>
                              </a>
                            </div>
                          </div>
                      
        </CustomItem>
      ))}
    </ReactSortable>
  );
}
export default Sortable
const CustomItem = styled(Item)`
  &.filter {
    background-color: #f33a;
  }
`;
