import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { GET_ADMIN_NOTIFICATION } from "../../graphql/queries/graphql_queries";
import { DELETE_NOTIFICATION } from "../../graphql/mutations/graphql.mutations";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const { data, refetch } = useQuery(GET_ADMIN_NOTIFICATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  useEffect(() => {
    if (data && data.getAdminNotification) {
      setNotifications(data.getAdminNotification);
    }
  }, [data]);

  const [deleteNotification] = useMutation(DELETE_NOTIFICATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const handleDeleteNotification = async (_id) => {
    try {
      await deleteNotification({
        variables: { _id },
      });
      alert("Successfully deleted notification");
      refetch();
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  return (
    <div>
      {notifications.map((notification) => (
        <div key={notification._id} className="px-2 border mt-3">
          <div className="flex flex-row gap-1 items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{notification.provider}</p>
              <p className="text-[14px]">{notification.comment}</p>
            </div>
            <div>
              <button
                onClick={() => handleDeleteNotification(notification._id)}
              >
                <RxCross2 />
              </button>
            </div>
          </div>
          <p className="text-[10px] mt-1">5 min ago</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
