import { useState } from "react";
import { CollapseInformation, SectionTitle, TopWave, EnglishLink } from "../../components";

export const English = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="homeCard" id="geometria">
      <TopWave />
      <SectionTitle title="Inglés" />
      <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
        <CollapseInformation name="Structures" id="structures">

          <div>
            <EnglishLink title="Present Simple" path="/presente-simple" isOpen={isOpen} setIsOpen={setIsOpen}></EnglishLink>
            <hr />

            <EnglishLink title="Past Simple" path="/pasado-simple" isOpen={isOpen} setIsOpen={setIsOpen}></EnglishLink>
            <hr />

            <EnglishLink title="Future Simple" path="/futuro-simple" isOpen={isOpen} setIsOpen={setIsOpen}></EnglishLink>
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
      </div>
    </div>
  );
};
