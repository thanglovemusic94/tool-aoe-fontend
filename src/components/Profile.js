import React, {useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";

const Profile = () => {
  const [showUserBoard, setShowUserBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)
  const history = useHistory()

  useEffect(() => {
    if (currentUser) {
      setShowUserBoard(true)
    } else {
      setShowUserBoard(false)
    }
  }, [currentUser]);
  if (!currentUser) {
    history.push('/login');
  }
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Chào mừng <strong>{currentUser.username}</strong>
        </h3>
        <h3>Bắt đầu đi chấm điểm nào</h3>
        {
            showUserBoard &&

              <Link  to={"/cham-diem"} className="nav-link btn-sm btn-success d-inline-block">
                Chấm Điểm
              </Link>

        }
      </header>

    </div>
  );
};

export default Profile;
