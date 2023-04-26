import { Link } from "react-router-dom";
import { CollapseInformation, SectionTitle, TopWave } from "../../components";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const English = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="homeCard" id="geometria">
      <TopWave />
      <SectionTitle title="Inglés" />
      <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
        <CollapseInformation name="Structures" id="structures">

          <div>
            <Link to="/present-simple" className="englishLink" onClick={() => setIsOpen(!isOpen)}>
              <div className="d-flex">
                {
                  !isOpen
                    ? <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconDown" />
                    : <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconUp" />
                }
                <h4>Present simple</h4>
              </div>
            </Link>
            <hr />

            <Link to="/past-simple" className="englishLink" onClick={() => setIsOpen(!isOpen)}>
              <div className="d-flex">
                {
                  !isOpen
                    ? <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconDown" />
                    : <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconUp" />
                }
                <h4>Past simple</h4>
              </div>
            </Link>
            <hr />

            <CollapseInformation name="Future simple" id="futureSimple" >
              <h5>Affirmative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>will</b> + verb in base form + complement <br />{" "}
                <br />
              </p>

              <h6>Examples</h6>
              <p>
                I <b>will</b> help you <br />I <b>will</b> go to the cafeteria
              </p>

              <hr />

              <h5>Negative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>will + not/ won't</b> + verb in base form +
                complement <br />
                <br />
              </p>

              <h6>Examples</h6>
              <p>
                They <b>won't</b> travel to Jamaica <br />
                She <b>won't</b> say to you her number
              </p>

              <hr />

              <h5>Interrogative</h5>
              <h6>Structure</h6>
              <p>
                <b>Will</b> + subject + verb in base form + complement + ?{" "}
                <br /> <br />
              </p>

              <h6>Examples</h6>
              <p>
                <b>Will</b> they come in? <br />
                <b>Will </b> you work for Microsoft?
              </p>
            </CollapseInformation>
            <hr />
          </div>
          <div>
            <CollapseInformation name="Present continuous" id="presentContinuous" >
              <h5>Affirmative</h5>
              <h6>Structure</h6>
              <p>
                Subject + am/is/are + <b>verb with ing</b> + complement <br />{" "}
                <br />
              </p>

              <h6>Examples</h6>
              <p>
                He is <b>playing</b> <br />I am <b>studying</b> for my exams.
              </p>

              <hr />

              <h5>Negative</h5>
              <h6>Structure</h6>
              <p>
                Subject + am/is/are <b>(not)</b> + <b>verb with ing</b> <br />{" "}
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                He is<b>n't</b> <b>playing</b> <br />
                She is not watching TV.
              </p>

              <hr />

              <h5>Interrogative</h5>
              <h6>Structure</h6>
              <p>
                <b>Am/is/are</b> + subject + <b>verb with ing</b> <br /> <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                <b>Is</b> he <b>playing</b>? <br />
                Are they <b>playing</b> basketball?
              </p>
            </CollapseInformation>
            <hr />

            <CollapseInformation name="Past continuous" id="pastContinuous" >
              <p>
                To describe an action that was happening but stopped, we use the
                past continuous tense. In addition, "be" is used as "was" or
                "were".
              </p>

              <h5>Affirmative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>was/were</b> + <b>verb with ing </b>
                <br />
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                He <b>was</b> <b>telling</b> her something <br />
                She <b>was singing</b> a song
              </p>

              <hr />

              <h5>Negative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>was/were + not</b> + <b>verb with ing</b> <br />{" "}
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                They <b>weren't</b> <b>swimming </b> in the pool <br />
                He <b>was not eating</b> his dinner.
              </p>

              <hr />

              <h5>Interrogative</h5>
              <h6>Structure</h6>
              <p>
                <b>Was/were</b> + subject + <b>verb with ing</b> + ? <br />
              </p>

              <h6>Examples</h6>
              <p>
                <b>Was</b> she <b>running</b> away? <br />
                <b>Was</b> she <b>playing</b> the piano?
              </p>
            </CollapseInformation>
            <hr />

            <CollapseInformation name="Future continuous" id="futureContinuous" >
              <h5>Affirmative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>will + be</b> + <b>verb with ing</b> <br />
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                I will be singing in the concert tomorrow <br />
                We <b>will be</b> <b>traveling </b> to Europe next summer.
              </p>

              <hr />

              <h5>Negative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>will + be/won't</b> + <b>verb with ing</b> <br />
                <br />
              </p>

              <h6>Examples</h6>
              <p>
                I <b>won't be singing</b> in the concert tomorrow <br />
                He <b>will not be attending</b> the meeting.
              </p>

              <hr />

              <h5>Interrogative</h5>
              <h6>Structure</h6>
              <p>
                <b>Will</b> + subject + <b>be</b> + <b>verb with ing</b> <br />
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                <b>Will</b> you <b>be singing</b> in the concert tomorrow?{" "}
                <br />
                <b>Will</b> they be finishing their homework by tomorrow?
              </p>
            </CollapseInformation>
            <hr />
          </div>

          <div>
            <CollapseInformation name="Present perfect" id="presentPerfect" >
              <h5>Affirmative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>have/has</b> + <b>verb in past participle</b> +
                object <br />
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                He <b>has completed</b> the task <br />I <b>have finished</b> my
                homework.
              </p>

              <hr />

              <h5>Negative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>have/has</b> + <b>not</b> +{" "}
                <b>verb in past participle</b> + object <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                He <b>hasn't</b> <b>completed</b> the task <br /> She{" "}
                <b>has not eaten</b> breakfast yet.
              </p>

              <hr />

              <h5>Interrogative</h5>
              <h6>Structure</h6>
              <p>
                <b>Have/has</b> + subject + <b>verb in past participle</b> +
                object + ? <br />
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                <b>Has</b> he <b>completed</b> the task? <br />
                <b>Have</b> they <b>seen</b> the new movie?
              </p>
            </CollapseInformation>
            <hr />

            <CollapseInformation name="Past perfect" id="pastPerfect" >
              <h5>Affirmative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>had</b> + <b>past participle</b> + complement{" "}
                <br /> <br />
              </p>

              <h6>Examples</h6>
              <p>
                She <b>had</b> finished the test <br />
                She <b>had finished</b> her homework before dinner.
              </p>

              <hr />

              <h5>Negative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>had not/hadn't</b> + <b>past participle</b> +
                complement <br /> <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                She <b>hadn't finished</b> the test <br />
                They <b>had not seen</b> that movie.
              </p>

              <hr />

              <h5>Interrogative</h5>
              <h6>Structure</h6>
              <p>
                <b>Had</b> + subject + <b>past participle</b> + complement{" "}
                <br />
                <br />{" "}
              </p>

              <h6>Examples</h6>
              <p>
                <b>Had</b> she <b>finished</b> the test?
                <br />
                <b>Had</b> he <b>completed</b> the project on time?
              </p>
            </CollapseInformation>
            <hr />

            <CollapseInformation name="Future Perfect" id="futurePerfect" >
              <h5>Affirmative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>will + have </b> + <b>past participle</b> +
                complement <br />
                <br />
              </p>

              <h6>Examples</h6>
              <p>
                She <b>will has</b> finished the test
                <b>
                  He <b>will has created</b> a new project
                </b>
              </p>

              <hr />

              <h5>Negative</h5>
              <h6>Structure</h6>
              <p>
                Subject + <b>will + not + have</b> + <b>past participle</b> +
                complement <br /> <br />
              </p>

              <h6>Example</h6>
              <p>
                She <b>won't has finished</b> the test
              </p>

              <hr />

              <h5>Interrogative</h5>
              <h6>Structure</h6>
              <p>
                <b>Will</b> + subject + <b> have + past participle</b> +
                complement <br />
              </p>

              <h6>Example</h6>
              <p>
                <b>Will</b> she <b> has finished</b> the test?
              </p>
            </CollapseInformation>
          </div>
        </CollapseInformation>

        <hr />

        <Link to="/determinants" className="englishLink" onClick={() => setIsOpen(!isOpen)}>
          <div className="d-flex">
            {
              !isOpen
                ? <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconDown" />
                : <MdOutlineKeyboardArrowDown size={40} className="collapseTitleIconUp" />
            }
            <h4>Determinants an/a</h4>
          </div>
        </Link>

        <hr />

        <CollapseInformation name="Modal verbs" id="modalverbs" >
          <p>
            Modal verbs are a type of auxiliary verb in English that modify
            the meaning of the main verb in a sentence. They express various
            shades of meaning related to possibility, ability, permission,
            obligation, and more.
          </p>
          <br />

          <p>
            <span className="fw-semibold">Can:</span> used to express ability,
            possibility, permission, and requests.
          </p>
          <ul>
            <li>Students can learn English.</li>
            <li>Can I help you?</li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">Could:</span> used to express
            posibility or ability in the past, polite requests or offers and,
            conditional or hypothetical situations.
          </p>
          <ul>
            <li>I could speak Spanish fluently when I lived in Spain.</li>
            <li>Could you please pass me the salt?</li>
            <li>
              If I had more time, I could finish the project by tomorrow.
            </li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">May - might:</span> "may" is used to express a higher degree of probability, ask for permission, or express a hypothetical or counterfactual situation in the present or future, while "might" is used to express a lower degree of probability or a hypothetical or counterfactual situation in the past.
          </p>
          <ul>
            <li>
              It may rain later today. (There's a good chance it will rain.)
            </li>
            <li>
              It might rain later today. (There's a possibility, but it's less
              likely than with "may".)
            </li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">Should:</span> is used to indicate expectation or recommendation, or hypothetical situation. It can
            also be used to express criticism or regret. It is a versatile
            verb that can be used in different contexts depending on the
            situation.
          </p>
          <ul>
            <li>You should study more to pass the exam."</li>
            <li>You shouldn't have said that to her.</li>
            <li>It should be sunny tomorrow.</li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">Must:</span> used to express
            obligation or necessity. Some of it functions is also express a
            certainty or strong recommendation, prohibition or negative
            obligation, etc.
          </p>
          <ul>
            <li>I must finish my work before I can go home.</li>
            <li>You must see that movie, it's really good.</li>
            <li>You must not smoke in here.</li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">Would:</span> used to communicate a conditional or hypothetical situations. It also can be used to describe a repeated action or habit in the past. Moreover, is often used in polite requests or offers.
          </p>
          <ul>
            <li>If I had more time, I would go to the gym.</li>
            <li>When I was a child, I would often spend hours playing outside.</li>
            <li>Would you like a cup of tea?</li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">Ought to:</span> it suggests a stronger obligation than "should", but not as strong as "must".
          </p>
          <ul>
            <li>You ought to eat more vegetables if you want to be healthy.</li>
            <li>They ought to be here by now.</li>
            <li>He ought to have finished his homework by now.</li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">Will:</span> is used to express a range of meanings related to future events or actions.
          </p>
          <ul>
            <li>She will graduate next year.</li>
            <li>They will be here at 5 pm.</li>
            <li>He will always stand up for what he believes in.</li>
          </ul>
          <br />

          <p>
            <span className="fw-semibold">Shall:</span> in the past, it was used as an alternative to "will", even you can find it in well known literature books of the past. Nowadays, "shall" is commonly used to form questions to make an offer or suggestion.
          </p>
          <ul>
            <li>Shall we go for a walk later?</li>
            <li>I shall do my best to help you.</li>
            <li>Shall I call you later to discuss the details?</li>
          </ul>
        </CollapseInformation>
      </div>
    </div>
  );
};
