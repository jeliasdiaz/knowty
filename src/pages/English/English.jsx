import { CollapseInformation, SectionTitle, TopWave, EnglishLink } from "../../components";

export const English = () => {
  return (
    <div className="homeCard" id="geometria">
      <TopWave />
      <SectionTitle title="Inglés" />
      <div className="subjectCard mb-5 ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">

          <div>
            <EnglishLink title="Present simple" path="/presente-simple" />
            <hr />

            <EnglishLink title="Past simple" path="/pasado-simple" />
            <hr />

            <EnglishLink title="Future simple" path="/futuro-simple" />
            <hr />
          </div>
          <div>

            <EnglishLink title="Present continuous" path="/presente-continuo" />
            <hr />
            <EnglishLink title="Past continuous" path="/pasado-continuo" />
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
      </div>
    </div>
  );
};
