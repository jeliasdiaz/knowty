import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const ContentsTable = ({ items }) => {

    const [nav, setNav] = useState(false);
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const glossaryNav = useRef();

    // The following useEffect listens for changes in the URL location and updates the current topic index accordingly:
    useEffect(() => {
        // Find the key in the 'items' object that matches the current pathname.
        const currentTopicKey = Object.keys(items).find(
            key => items[key].path === location.pathname
        );
        // Calculate the new index based on the found key or default to 0.
        const newIndex = currentTopicKey
            ? Object.keys(items).indexOf(currentTopicKey)
            : 0;
        // Update the 'currentTopicIndex' state with the new index.
        setCurrentTopicIndex(newIndex);
    }, [location.pathname, items]);

    // Another useEffect is used to set the 'clicked' state to true after a delay of 300 milliseconds.
    useEffect(() => {
        setTimeout(() => {
            setClicked(true);
        }, 300);
    }, []);

    // Define a function 'handleNav' that toggles the 'nav' and 'clicked' states.
    const handleNav = () => {
        setNav(!nav);
        setClicked(!clicked);
    };

    // Define a 'nextTopic' function using useCallback that navigates to the next topic in a list of 'items':
    const nextTopic = useCallback(() => {
        const topicKeys = Object.keys(items);
        const nextIndex = currentTopicIndex + 1;

        if (nextIndex < topicKeys.length) {
            const nextTopicKey = topicKeys[nextIndex];
            const nextTopicPath = items[nextTopicKey].path;
            setCurrentTopicIndex(nextIndex);
            navigate(nextTopicPath);
        }
    }, [currentTopicIndex, items, navigate]);

    // Define a 'prevTopic' function using useCallback that navigates to the previous topic in a list of 'items':
    const prevTopic = useCallback(() => {
        const topicKeys = Object.keys(items);
        const prevIndex = currentTopicIndex - 1;

        if (prevIndex >= 0) {
            const prevTopicKey = topicKeys[prevIndex];
            const prevTopicPath = items[prevTopicKey].path;
            setCurrentTopicIndex(prevIndex);
            navigate(prevTopicPath);
        }
    }, [currentTopicIndex, items, navigate]);

    // Finally, set up an event listener for left and right arrow key presses to navigate between topics:
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) { // Left arrow key
                prevTopic();
            } else if (event.keyCode === 39) { // Right arrow key
                nextTopic();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Clean up the event listener when the component unmounts.
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentTopicIndex, items, navigate, prevTopic, nextTopic]);


    const handleSubitemClick = (subitem) => {
        // Navega a la página correspondiente
        navigate(subitem.path);

        // Espera un momento para asegurarte de que la página se haya cargado
        setTimeout(() => {
            // Encuentra el elemento con el ID y desplázate a él
            const elementToScroll = document.getElementById(subitem.scrollToId);
            if (elementToScroll) {
                elementToScroll.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500); 
    }


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
                            Object.keys(items).map(mainTopic => {
                                const mainTopicData = items[mainTopic];
                                const isCurrentPath = location.pathname === mainTopicData.path;
                                return (
                                    <React.Fragment key={mainTopic}>
                                        <Link to={mainTopicData.path} rel="noreferrer" style={{ color: isCurrentPath && "#2b7ea1", fontWeight: 600 }}>{mainTopic}</Link>
                                        <br />
                                        {mainTopicData.subtopics && (
                                            <div className="subtopics">
                                                {Object.keys(mainTopicData.subtopics).map(subtopic => {
                                                    return (
                                                        
                                                        <>
                                                        
                                                            <a
                                                                key={subtopic}
                                                                href={`#${subtopic}`}
                                                                onClick={() => handleSubitemClick(mainTopicData.subtopics[subtopic])}
                                                            >
                                                                {subtopic}
                                                            </a>
                                                            <br />
                                                        </>
                                                    );
                                                })}
                                            </div>
                                        )}
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