import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {menu} from "../dummydata"
import { constants } from '../dummydata';
import { Link } from 'react-router-dom';
class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
       
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            {menu.map((val) => (
          <ul className="nav nav-list">
            <li className="menuitem ">
              <Link to={val.link} >
                <i className={constants.link + " " + val.icon}></i>
                {val.title}
              </Link>
            </li>
          </ul>
        ))}
            </CardBody>
          </Card>
        </Collapse>
        <div  onClick={this.toggle} >
        <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
          <i
            className="ace-icon fa fa-angle-double-right"
            data-icon1="ace-icon fa fa-angle-double-right"
            data-icon2="ace-icon fa fa-angle-double-left"
          ></i>
        </div>
        </div>
      </div>
    );
  }
}

export default Example;