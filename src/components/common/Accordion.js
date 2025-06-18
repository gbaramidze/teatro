import React from 'react'
import WordOpacity from '@/components/common/WordOpacity'

const Accordion = ({ question, ans, parents_id, id }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
                    <WordOpacity paragraph={question} />
                    <span className="faq-arrow">
                        <svg width="35" height="35"><use xlinkHref="#faq-arrow">
                            <symbol id="faq-arrow" viewBox="0 0 14 14">
                                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                            </symbol>
                        </use>
                        </svg>
                    </span>
                </button>
            </h2>
            <div id={id} className={`accordion-collapse collapse ${id === "itemTwo" && "show"}`} data-bs-parent={`#${parents_id}`}>
                <p className="accordion-body custom-sans custom-font-style-1 pt-0 mb-0">
                    {ans}
                </p>
            </div>
        </div>
    )
}

export default Accordion