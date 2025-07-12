import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../icons";
import RegisterPage from "../auth/RegisterPage";
import LoginPage from "../auth/LoginPage";
import useUserStore from "../../store/userStore";
import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  const userRole = user ? user.role : "guest";

  const [resetForm, setResetForm] = useState(false);
  const hdlClose = () => {
    setResetForm((prev) => !prev);
  };

  // --- ฟังก์ชันสำหรับนำทาง (Navigation Handlers) ---
  const handlePlayClick = () => {
    // ผู้ใช้ทั่วไป: ไปหน้าเลือกหมวดหมู่
    navigate("/category");
  };

  const handleHistoryClick = () => {
    // ผู้ใช้ทั่วไป: ไปหน้าประวัติการเล่น
    navigate("/history");
  };

  const handleLogoutClick = async (data) => {
    console.log("Logging out...");
    await logout(data);
    toast.success("logout success")
    navigate("/");
  };

  const handlePlayTestClick = () => {
    // GM: ไปหน้าเลือกหมวดหมู่เพื่อเล่นทดสอบ
    // เมื่อเรียก API สร้าง PlaySession จะต้องส่ง isTestSession: true
    navigate("/category"); // GM ไปหน้าเลือกหมวดหมู่เพื่อเริ่ม Test Game
    console.log("GM testing game...");
  };

  // --- ฟังก์ชันสำหรับปุ่มจัดการของ GM ---
  const handleCheckQuestionClick = () => {
    navigate("/gm/questions");
  };
  const handleCreateQuestionClick = () => {
    navigate("/gm/questions/create");
  };
  const handleCreateCategoryClick = () => {
    navigate("/gm/categories/create");
  };
  const handleEditQuestionClick = () => {
    navigate("/gm/questions/edit/1");
  }; // ตัวอย่าง: ต้องมี ID
  const handleDeleteQuestionClick = () => {
    console.log("Delete Question clicked");
  };
  const handleEditCategoryClick = () => {
    navigate("/gm/categories/edit/1");
  }; // ตัวอย่าง: ต้องมี ID
  const handleDeleteCategoryClick = () => {
    console.log("Delete Category clicked");
  };
  const handleEditChoiceClick = () => {
    navigate("/gm/questions/1/choices");
  }; // ตัวอย่าง: ต้องมี ID

  return (
    <>
      <div className="min-h-screen w-full relative text-white flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="absolute top-4 w-full text-xl flex justify-between items-center px-8">
          <div className="flex items-center justify-center space-x-20">
            <a
              href="https://www.facebook.com/BosszyEIEI/"
              className="w-15 transform transition-all duration-100 hover:scale-110 cursor-pointer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/natchapon_c/"
              className="w-15 transform transition-all duration-100 hover:scale-110 cursor-pointer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/natchapon-cholwatthanatanakorn-84b81128b/"
              className="w-15 transform transition-all duration-100 hover:scale-110 cursor-pointer"
            >
              <LinkedinIcon />
            </a>
          </div>
          <>
            {userRole === "guest" ? (
              <button
                onClick={() =>
                  document.getElementById("register-form").showModal()
                }
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Register
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                {user.image ? (
                  <img
                    src={user.image} // ใช้ URL รูปภาพจากข้อมูลผู้ใช้
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#e67e22] shadow-md" // ปรับขนาดและสไตล์
                  />
                ) : (
                  // แสดง Placeholder ถ้าไม่มีรูป (ตัวอักษรแรกของชื่อ)
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold text-white border-2 border-[#e67e22] shadow-md">
                    {user.firstName ? user.firstName[0].toUpperCase() : "?"}
                  </div>
                )}
                <span className="text-xl font-semibold text-white">
                  Hello, {user.firstName}!
                </span>
                <button
                  onClick={handleLogoutClick}
                  className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        </div>

        {/* Main Content: Genius Image & Text */}
        <div className="flex flex-col items-center justify-center flex-grow ">
          <img
            src="/logogame.png" // Placeholder image for Genius Boy
            alt="Genius Boy"
            className="w-[600px] h-[600px]"
          />
        </div>

        {/* Footer Buttons Section */}
        <div className="mb-20 w-full flex flex-wrap justify-center">
          {userRole === "guest" && (
            <button
              type="button"
              onClick={() => document.getElementById("login-form").showModal()}
              className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
            >
              Login
            </button>
          )}

          {userRole === "user" && (
            <div className="flex gap-50">
              <button
                onClick={handlePlayClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Play!
              </button>
              <button
                onClick={handleHistoryClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                History
              </button>
            </div>
          )}

          {userRole === "gm" && (
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <button
                onClick={handleCheckQuestionClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Check Question in Category
              </button>
              <button
                onClick={handleCreateQuestionClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Create Question
              </button>
              <button
                onClick={handleCreateCategoryClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Create Category
              </button>
              <button
                onClick={handleEditQuestionClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Edit Question
              </button>
              <button
                onClick={handleEditCategoryClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Edit Category
              </button>
              <button
                onClick={handleDeleteQuestionClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Delete Question
              </button>
              <button
                onClick={handleDeleteCategoryClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Delete Category
              </button>
              <button
                onClick={handleEditChoiceClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Edit choice in question
              </button>
              <button
                onClick={handlePlayTestClick}
                className="btn btn-xl bg-[#e67e22] border-0 text-xl hover:bg-[#d35400] cursor-pointer"
              >
                Play Test !
              </button>
            </div>
          )}
        </div>
      </div>
      <dialog id="register-form" className="modal" onClose={hdlClose}>
        <div className="modal-box">
          <RegisterPage resetForm={resetForm} />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
      <dialog id="login-form" className="modal" onClose={hdlClose}>
        <div className="modal-box">
          <LoginPage resetForm={resetForm} />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default HomePage;
