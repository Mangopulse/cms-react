import React from 'react'

const OnClick = () => {
  return (
    <div>
      <div id="bulk-actions" style={{display:"block"}}>
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
    </div>
  )
}

export default OnClick
