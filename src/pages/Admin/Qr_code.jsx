import { useState } from "react"
import QRCode from "react-qr-code"
import { GET_WHATSAPP_CODE } from "../../graphql/queries/graphql_queries"
import { useQuery } from "@apollo/client"

const Qr_code = () => {
    const [showQrCode, setShowQrCode] = useState(false)
    const [value, setValue] = useState("")

    const { data, error } = useQuery(GET_WHATSAPP_CODE, {
        context: {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        },
      });

      console.log({data})
      console.log(error)
      
    const handleButtonClick = ()=>{
        setShowQrCode(true)
        setValue(data)
    }
  return (
    <div>
       <div className="flex justify-center items-center h-screen">
      {showQrCode ? (
        <div className="ml-8 my-2">
          <QRCode
            size={250}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={value}
            viewBox={`0 0 256 256`}
          />
        </div>
      ) : (
        <button
          className="sm:w-auto mt-4 sm:mt-0 px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={handleButtonClick}
        >
          Get QR code
        </button>
      )}
    </div>
    </div>
  )
}

export default Qr_code
