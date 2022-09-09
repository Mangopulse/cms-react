import React from 'react'
import { Link } from 'react-router-dom'
const AlnasherTableHeader = () => {
  return (
   <>
     <ul
        className="inbox-tabs nav nav-tabs tab-size-bigger tab-space-1"
      >
        <li className="nav-item">
          <Link 
          className="nav-link active" 
          to="/AlnasherArticles">
        <i className="red ace-icon fa fa-home bigger-130"></i>
        <span className="bigger-110">Article</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AlnasherSportsArticle"
            className="nav-link"
          >
            <i className="ace-icon fa fa-bars bigger-130"></i>
            <span className="bigger-110">Sport</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/EntertaimentArticles"
            className="nav-link"
          >
            <i className="ace-icon fa fa-bars bigger-130"></i>
            <span className="bigger-110">Entertainment</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AlnasherPolitics"
            className="nav-link"
          >
            <i className="ace-icon fa fa-bars bigger-130"></i>
            <span className="bigger-110">Politics</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AlnasherFashion"
            className="nav-link"
          >
            <i className="ace-icon fa fa-bars bigger-130"></i>
            <span className="bigger-110">Fashion</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AlnasherSports"
            className="nav-link"
          >
            <i className="ace-icon fa fa-bars bigger-130"></i>
            <span className="bigger-110">Sports</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
           to="/AlnasherTech"
            className="nav-link"
          >
            <i className="ace-icon fa fa-bars bigger-130"></i>
            <span className="bigger-110">Tech </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AlnasherBusiness"
            className="nav-link"
          >
            <i className="ace-icon fa fa-bars bigger-130" ></i>
            <span className="bigger-110">Business</span>
          </Link>
        </li>
      </ul>
   </>
  )
}

export default AlnasherTableHeader
