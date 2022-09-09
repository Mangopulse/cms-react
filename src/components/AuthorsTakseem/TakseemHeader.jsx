import React from 'react'
import { Link } from 'react-router-dom'
const TakseemHeader = () => {
  return (
    <div>
      <ul className="nav nav-tabs" id="statustabs">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/New"
                      >
                        <i className="blue ace-icon fa fa-bolt bigger-120"></i>
                        New
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="/Published"
                      >
                        <i className="green ace-icon fa fa-check bigger-120"></i>
                        Published
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/Posts/Tabs?type=author&amp;status=30"
                      >
                        <i className="red ace-icon fa fa-times bigger-120"></i>
                        Unpublished
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/Posts/Tabs?type=author&amp;status=-100"
                      >
                        <i className="red ace-icon fa fa-times bigger-120"></i>
                        Deleted
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/Posts/Tabs?type=author&amp;status=-150"
                      >
                        <i className="ace-icon fa fa- bigger-120"></i>
                        Expired
                      </a>
                    </li>
                  </ul>
    </div>
  )
}

export default TakseemHeader
