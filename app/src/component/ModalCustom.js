import React from 'react'

// data train

// const fakeButton = <span> Báo cáo tin <i class="far fa-flag"></i></span>
// const fakeTitle = "Report tin dang"
// const fakeBody = <div>Form Report tindang</div>
// const fakeFooter = <div class="modal-footer">
//                         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                         <button type="button" class="btn btn-primary">Understood</button>
//                     </div>
// id = "#modal_report_news"
export const ModalCustom = ({button, title, body, footer, id}) =>{

    return (
        <div>
            <span data-toggle="modal" data-target={`#${id}`}>
                {button}
            </span>
            <div class="modal fade" id={id} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="modal_report_newsLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id={`${id}Label`} style={{color: "#000"}}>{title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body"  style={{color: "#000"}}>
                        {body}
                    </div>
                    <div class="modal-footer">
                        {footer || ""}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}