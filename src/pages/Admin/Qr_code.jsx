import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { GET_WHATSAPP_CODE } from "../../graphql/queries/graphql_queries";
import { useLazyQuery } from "@apollo/client";

const Qr_code = () => {
  // const [showQrCode, setShowQrCode] = useState(false);
  const [value, setValue] = useState("");

  const [getWhatsappCode, { data, loading }] = useLazyQuery(GET_WHATSAPP_CODE, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const handleButtonClick = () => {
    getWhatsappCode();
    // setShowQrCode(true);
  };

  useEffect(() => {
    if (data) {
      setValue(data?.getQRCode);
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <button
          className="sm:w-auto mt-4 sm:mt-0 px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={handleButtonClick}
        >
          Get QR code
        </button>
        <div className="ml-8 my-2">
          {loading ? (
            <div>
              <div
                className="w-12 h-12 rounded-full animate-spin
                    border-solid border-8 border-purple-500 border-t-transparent"
              ></div>
            </div>
          ) : (
            value && (
              <QRCode
                size={250}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Qr_code;
