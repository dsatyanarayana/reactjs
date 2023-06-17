import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const AppLayout = ()=>{
    return (
        <div className="layout">
            <Header/>
            <Body/>
			<Footer/>
        </div>
        );
}

export default AppLayout;