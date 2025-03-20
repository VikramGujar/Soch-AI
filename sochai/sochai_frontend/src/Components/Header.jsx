import { useState, useEffect } from "react";
import { useAppContext } from "./useAppContext";

export function Header() {
    const { darkMode, language, user, toggleTheme, changeLanguage, updateUser } = useAppContext();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
    const [isValid, setIsValid] = useState(false);

    
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) updateUser(JSON.parse(storedUser));
    }, [updateUser]);

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = { ...formData, [name]: value };
        setFormData(updatedForm);

        
        setIsValid(
            updatedForm.firstName.trim() &&
            updatedForm.lastName.trim() &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedForm.email)
        );
    };

    
    const handleSubmit = () => {
        if (isValid) {
            localStorage.setItem("user", JSON.stringify(formData));
            updateUser(formData);
            setShowModal(false);
        } else {
            alert(language === "English" ? "Please enter valid details!" : "कृपया सही जानकारी दर्ज करें!");
        }
    };

    return (
        <header className={`fixed-top w-100 px-4 py-3 d-flex justify-content-between align-items-center shadow-sm ${darkMode ? "bg-black text-white" : "bg-white text-dark"}`}>
            
            <div className="fs-4 fw-bold" style={{ height: '60px', width: '300px', overflow: 'hidden' }}>
  <img 
    src="soch.png" 
    alt="logo" 
    style={{ 
      height: '100%', 
      width: '100%', 
      objectFit: 'cover', 
      objectPosition: 'center' 
    }} 
  />
</div>


            
            <div className="fs-6 text-center flex-grow-1">{language === "English" ? "Your Thinking Friend! 💡🤝" : "आपकी सोच का दोस्त! 💡🤝"}</div>

            
            {user ? (
                <span className="fw-semibold me-3">{language === "English" ? `Welcome, ${user.firstName}!` : `स्वागत है, ${user.firstName}!`}</span>
            ) : (
                <button onClick={() => setShowModal(true)} className="btn btn-primary me-3">{language === "English" ? "Sign In" : "साइन इन"}</button>
            )}

            
            <select className="form-select w-auto me-3" value={language} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="English">English</option>
                <option value="Hindi">हिन्दी</option>
            </select>

            
            <button onClick={toggleTheme} className={`btn rounded-circle ${darkMode ? "btn-warning" : "btn-dark"}`}>
                {darkMode ? <i className="bi bi-sun-fill fs-5"></i> : <i className="bi bi-moon-fill fs-5"></i>}
            </button>

            
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{language === "English" ? "Sign In" : "साइन इन"}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder={language === "English" ? "First Name" : "पहला नाम"}
                                    className="form-control mb-2"
                                    onChange={handleInputChange}
                                    value={formData.firstName}
                                    autoFocus
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder={language === "English" ? "Last Name" : "अंतिम नाम"}
                                    className="form-control mb-2"
                                    onChange={handleInputChange}
                                    value={formData.lastName}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={language === "English" ? "Email" : "ईमेल"}
                                    className="form-control mb-2"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={handleSubmit} disabled={!isValid}>
                                    {language === "English" ? "Submit" : "जमा करें"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
