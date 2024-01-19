import { useState } from "react"
import Engineer_AddSignature from "../components/Engineer_AddSignature"

const Engineer_Profile = () => {
  const [AddSign, setAddSign] = useState(false)

 const open_Sign_modal = ()=>{
   setAddSign(true)
 }
 const close_Sign_Modal=()=>{
  setAddSign(false);
 }
  return (
    <>
     <div className="flex">
      <div className="w-12 h-screen lg:w-20">
        {/* Empty space for navbar here */}
      </div>
      <div className="flex-1">
      <div className="w-full">
        <div>
        <h1 className="text-4xl font-bold mt-8 text-center"
        >Souvik Das</h1>
        </div>
        <div className="mt-6 flex flex-col lg:flex-row items-start mx-2 lg:mx-20 text-lg">
            <div className="flex-1 lg:mr-4">
          <h1 className="py-2">
            <b>Emp ID:</b> 201
            </h1>
            <h1 className="py-2">
            <b>Designation:</b> Engineer
            </h1>
            <h1 className="py-2">
            <b>Signature:</b> <button  
            className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={open_Sign_modal}
            > Add </button>
            </h1>
           </div>
           <div className="lg:ml-4 mt-4 lg:mt-0">
           <h1 className="py-2">
            <b>Age:</b> 21
            </h1>
            <h1 className="py-2">
            <b>Address:</b> Gayeshpur, kalyani
            </h1>
            <h1 className="py-2">
            <b>Contact:</b> 7412589630
            </h1>
          </div>
        </div>
         <main className="mt-5">
                <section>
                <div className="flex justify-between w-full items-center px-2 lg:px-10">
                    <h3 className="lg:text-3xl text-xl font-semibold">
                     Call Details
                    </h3>
                    <button
                      // onClick={() => navigate("/calls")}
                      className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      View Calls
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 lg:mx-auto mt-5 px-2 lg:px-10 gap-5">
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>New Calls</h4>
                        <h1 className="font-bold">
                          8
                        </h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>{`Today's Calls`}</h4>
                        <h1 className="font-bold">
                          8
                          </h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>Pending Calls</h4>
                        <h1 className="font-bold">
                        12
                        </h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>Total Calls</h4>
                        <h1 className="font-bold">
                         40
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
         </main>
         { AddSign ?
         <Engineer_AddSignature
          closeModal={close_Sign_Modal}/>
          : null }
      </div>
      </div>
      </div>
    </>

  )
}

export default Engineer_Profile
