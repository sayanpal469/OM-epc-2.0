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

  // const calculateMinutesAgo = (create) => {
  //   const currentTime = new Date().getTime();
  // const diffInMilliseconds = currentTime - create;
  // const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  // return diffInMinutes;
  // };

  
  const calculateTimeAgo = (create) => {
    const currentTime = new Date().getTime();
    const diffInMilliseconds = currentTime - create;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays >= 1) {
        // Construct the date and time string
        const createDate = new Date(create);
        const dateString = createDate.toLocaleDateString();
        const timeString = createDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${dateString} ${timeString}`;
    } else if (diffInHours >= 1) {
        return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
        return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    }
};

  return (
    <div>
      {notifications.map((notification) => (
          <div key={notification._id} className="px-2 border-t-2  mt-2 pt-1">
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
          <p className="text-[10px] mt-1">
          {calculateTimeAgo(notification.createdAt)}
            </p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
