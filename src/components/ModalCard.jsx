import React from 'react'
import { Modal } from 'react-bootstrap';

export const ModalCard = (props) => {
    const {focusedProduct,setFocusedProduct} = props
    
    if(focusedProduct === null){
      return (
        <Modal
        className='my-modal'
        size="lg"
        show={focusedProduct}
        onHide={() => setFocusedProduct(null)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {/* <p>{focusedProduct.name}</p> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='flex gap-3 flex-col md:flex-row'>
            <div className='w-full md:w-[50%]'>
              <div className='flex justify-center'>
                {/* <img width={400} src={response.imgurl} alt="" /> */}
              </div>
              <div className='flex justify-center'>
                {/* <a href={response.url} className='flex border py-2 px-3 my-4 hover:text-gray-500'>
                  BUY NOW
                </a> */}
              </div>
            </div>
            <div className='w-full md:w-[50%]'>
              <div className='bg-white h-[1px] w-full my-2 mx-auto'/>
              <div className='font-bold text-3xl'>
                {/* IDR {response.price} */}
              </div>
              <div className='bg-white h-[1px] w-full my-2 mx-auto'/>
              <div>
                <div className='font-bold text-2xl'>
                  Details
                </div>
                <div>
                  <div>
                  {/* {focusedProduct.details.detail1} */}
                  </div>
                  <div>
                  {/* {focusedProduct.details.detail2} */}
                  <div>
                </div>
                <div className='font-bold text-2xl mt-3'>
                  Features
                </div>
                </div>
                  {/* {focusedProduct.details.Features} */}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      )
    }else{
      return (
      <Modal
      className='my-modal'
      size="lg"
      show={focusedProduct}
      onHide={() => setFocusedProduct(null)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <p>{focusedProduct.name}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='flex gap-3 flex-col md:flex-row'>
          <div className=' md:w-[50%]'>
            <div className='flex justify-center'>
              <img width={400} src={focusedProduct.imgurl[0]} alt="" />
            </div>
            <div className='flex justify-center'>
              <a href={focusedProduct.url} className='flex border py-2 px-3 my-4 hover:text-gray-500'>
                BUY NOW
              </a>
            </div>
          </div>
          <div className='w-full md:w-[50%]'>
            <div className='bg-white h-[1px] w-full my-2 mx-auto'/>
            <div className='font-bold text-3xl'>
              IDR {focusedProduct.price}
            </div>
            <div className='bg-white h-[1px] w-full my-2 mx-auto'/>
            <div>
              <div className='font-bold text-2xl'>
                Details
              </div>
              <div>
                <div>
                {focusedProduct.details[0].detail1}
                </div>
                <div>
                {focusedProduct.details[0].detail2}
                <div>
              </div>
              <div className='font-bold text-2xl mt-3'>
                Features
              </div>
              </div>
                {focusedProduct.details[0].Features}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    )

    }
}
