import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
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
        
      
            <div id="bulk-actions" style={{marginRight:400+"px"}}>
              <a data-href="/Posts/MultiplePublish" className="btn btn-new success"
                ><i className="fa fa-check"></i>نشر</a
              >
              <a
                data-href="/Posts/MultipleUnPublish"
                className="btn btn-new warning"
                ><i className="fa fa-times"></i>إلغاء نشر</a
              >
              <a data-href="/Posts/MultipleDelete" className="btn btn-new danger"
                ><i className="fa fa-trash"></i>حذف</a
              >
            </div>
    
        </Collapse>

        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem'}}>click</Button>
      </div>
    );
  }
}

export default Example;