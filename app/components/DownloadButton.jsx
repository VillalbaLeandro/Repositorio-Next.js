import React from 'react'

const DownloadButton = () => {
    return (
        <div>
            <div className="flex justify-center mt-5">
                <a href='./CV - Leandro Esteban Villalba.pdf' download className="download-button transform active:scale-95 bg-sky-600 hover:bg-sky-500 text-white px-10 py-3 rounded-lg font-bold tracking-widest w-full">
                    <div className="flex justify-center items-center relative">
                        <div className="svg-container">
                            <svg className="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="download-loader text-white hidden"></div>
                            <svg className="check-svg hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z" fill="white" />
                            </svg>
                        </div>
                        <div className="button-copy pl-2 leading-none uppercase">DOWNLOAD CV</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DownloadButton
