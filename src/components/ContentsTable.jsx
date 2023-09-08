import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const ContentsTable = ({ items }) => {
    const [nav, setNav] = useState(false);
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [clicked, setClicked] = useState(false) //! improve this name
    const navigate = useNavigate();
    const location = useLocation();
    const glossaryNav = useRef()
    useEffect(() => {
        const currentTopicKey = Object.keys(items).find(key => items[key] === location.pathname);
        const newIndex = currentTopicKey ? Object.keys(items).indexOf(currentTopicKey) : 0;
        setCurrentTopicIndex(newIndex);
    }, [location.pathname, items]);

    useEffect(() => {
      setTimeout(() => {
        setClicked(true)
      }, 300)
    
    }, [])
    
    const handleNav = () => {
        setNav(!nav);          
        setClicked(!clicked)
    };

    const nextTopic = () => {
        const topicKeys = Object.keys(items);
        const nextIndex = currentTopicIndex + 1;

        if (nextIndex < topicKeys.length) {
            const nextTopicKey = topicKeys[nextIndex];
            const nextTopicPath = items[nextTopicKey];
            setCurrentTopicIndex(nextIndex);
            navigate(nextTopicPath);
        }
    };

    const prevTopic = () => {
        const topicKeys = Object.keys(items);
        const prevIndex = currentTopicIndex - 1;

        if (prevIndex >= 0) {
            setCurrentTopicIndex(prevIndex);

            const prevTopicKey = topicKeys[prevIndex];
            const prevTopicPath = items[prevTopicKey];
            setCurrentTopicIndex(prevIndex);
            navigate(prevTopicPath); // Navega a la ruta del tema anterior
        }
    };

    return (
        <>
            <div className="topicController">
                <BsArrowLeftShort size={40} className="btn-secondary p-2" cursor="pointer" onClick={prevTopic} />

                <div className="glossary ownShadow" onClick={handleNav}>
                    <span>Contenidos</span>
                </div>

                <BsArrowRightShort size={40} className="btn-secondary p-2" cursor="pointer" onClick={nextTopic} />
            </div>

            <div className={`glossary-nav  ${nav ? "open" : clicked ? "close" : "closeWithoutAnimation"}`} ref={glossaryNav}>
                <div className="glossary-content">
                    <div className="d-flex justify-content-between mb-2">
                        <h3>Contenidos</h3>

                        <IoClose size={30} onClick={handleNav} cursor="pointer" />
                    </div>

                    <div className="glossary-items">
                        {
                            Object.keys(items).map(key => {
                                const isCurrentPath = location.pathname === items[key]
                                return (
                                    <React.Fragment key={key}>
                                        <Link to={items[key]} rel="noreferrer" style={{ color: isCurrentPath && "#2b7ea1" }}>{key}</Link>
                                        <br />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    );
};

ContentsTable.propTypes = {
    items: PropTypes.object.isRequired
}