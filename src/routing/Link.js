// import axios from "axios";

const Link = ({className, href, children, userType, setUserType, setSigned, showLoginContent})=>
{
    const linkClick = (event) =>
    {
        event.preventDefault();

        if(userType === "customer" && href === "/AllComplaints") return;
        if(userType === "admin" && href === "/CreateComplaint") return;

        if(href === "/")
        {
            const logout = ()=>
            {
                // const response = await axios.
                // window.history.replaceState({}, '', href);

                setUserType("none");
                setSigned(false);

                localStorage.setItem("signed", false);
                localStorage.setItem("id", null);
                localStorage.setItem("role", "");

                showLoginContent(true);
                return;
            }
            logout();
        }
        // change url
        window.history.replaceState({}, '', href);

        // make a global state to use it in the Route page
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a className={className} 
                onClick={linkClick}
                href={href}
                >
                {children}
            </a>
}

export default Link;