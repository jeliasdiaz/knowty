import CollapseTitle from "../../components/CollapseTitle";
import { SectionTitle } from "../../components/SectionTitle";

const English = () => {
    return (
        <div className="homeGeometria" id="geometria">
            <img src="/img/waveThree.svg" alt="" />
            <SectionTitle title="Inglés" />
            <div className="cardEnglish mb-5 shadow" data-aos="fade-up" data-aos-duration="700">
                <div>
                    <h1>Structures</h1>
                    <div>
                        <CollapseTitle name="Present simple" id="#presentSimple" />
                        <div className="collapse" id="presentSimple">
                            <h6>Affirmative</h6>
                            <p>Subject + verb + complement <br />  She loves pizza and brownies <br /> He plays the guitar</p>
                            <h6>Negative</h6>
                            <p>Subject + <b>doesn't/don't</b> + verb in base form + complement <br />  He doesn't like coffee when he goes to sleep. <br /> She <b>doesn't </b> play chess</p>
                            <h6>Interrogative</h6>
                            <p><b>Do/Does</b> + Subject + Verb in base form + complement + ? <br /> <b>Does</b> he do his homework? <br /> <b>Do</b> you cook turkey?</p>
                        </div>
                        <hr />

                        <CollapseTitle name="Past simple" id="#pastSimple" />
                        <div className="collapse" id="pastSimple">
                            <h6>Affirmative</h6>
                            <p>Subject + <b>did</b> + verb in base form + complement<br />  I <b>did</b> my homework at 3:00 pm <br />I did cook the lunch at the 10:00AM </p>
                            <h6>Negative</h6>
                            <p>Subject + <b>did + not</b> + verb in base form <br />  <b>Or</b> <br /> Subject + <b>didn't</b> + verb in base form <br /> I <b>didn't</b> work in a cafeteria <br />I <b>didn't</b> do my homeworks </p>
                            <h6>Interrogative</h6>
                            <p> <b>Did</b> + subject + verb in  base form + complement ? <br /> <b>Did</b> you make dinner for your mother? <br /><b>Did</b> she make the cake?</p>
                        </div>
                        <hr />

                        <CollapseTitle name="Future simple" id="#futureSimple" />
                        <div className="collapse" id="futureSimple">
                            <h6>Affirmative</h6>
                            <p>Subject + <b>will</b> + verb in base form + complement <br /> I <b>will</b> help you <br />I <b>will</b> go to the cafeteria</p>
                            <h6>Negative</h6>
                            <p>Subject + <b>will + not/ won't</b> + verb in base form + complement <br />
                                They <b>won't</b> travel to Jamaica <br />She <b>won't</b> say to you her number</p>
                            <h6>Interrogative</h6>
                            <p><b>Will</b> + subject + verb in base form + complement + ? <br /> <b>Will</b> they come in? <br />
                                <b>Will </b> you work for Microsoft?</p>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <CollapseTitle name="Present continuous" id="#presentContinuous" />
                        <div className="collapse" id="presentContinuous">
                            <h6>Affirmative</h6>
                            <p>Subject + am/is/are + <b>verb with ing</b> + complement <br /> He is <b>playing</b> <br />I am <b>studying</b> for my exams.</p>
                            <h6>Negative</h6>
                            <p>Subject + am/is/are <b>(not)</b> + <b>verb with ing</b> <br /> He is<b>n't</b> <b>playing</b> <br />She is not watching TV.</p>
                            <h6>Interrogative</h6>
                            <p><b>Am/is/are</b> + subject + <b>verb with ing</b> <br /> <b>Is</b> he <b>playing</b>? <br />Are they <b>playing</b> basketball?</p>
                        </div>
                        <hr />

                        <CollapseTitle name="Past continuous" id="#pastContinuous" />
                        <div className="collapse" id="pastContinuous">
                            <h6>Affirmative</h6>
                            <p>Subject + <b>was/were</b> + <b>verb with ing </b><br /> He <b>was</b> <b>telling</b> her something <br />She <b>was singing</b> a song</p>
                            <h6>Negative</h6>
                            <p>Subject + <b>was/were + not</b> + <b>verb with ing</b> <br />  They <b>weren't</b> <b>swimming </b> in the pool <br />He <b>was not eating</b> his dinner.</p>
                            <h6>Interrogative</h6>
                            <p><b>Was/were</b> + subject + <b>verb with ing</b> + ? <br /><b>Was</b> she <b>running</b> away? <br /><b>Was</b> she <b>playing</b> the piano?</p>
                        </div>
                        <hr />

                        <CollapseTitle name="Future continuous" id="#futureContinuous" />
                        <div className="collapse" id="futureContinuous">
                            <h6>Affirmative</h6>
                            <p>Subject + <b>will + be</b> + <b>verb with ing</b> <br /> I will be singing in the concert tomorrow <br />We <b>will be</b> <b>traveling </b> to Europe next summer.</p>
                            <h6>Negative</h6>
                            <p>Subject + <b>will + be/won't</b> + <b>verb with ing</b> <br /> I <b>won't be singing</b> in the concert tomorrow <br />He <b>will not be attending</b> the meeting.</p>
                            <h6>Interrogative</h6>
                            <p><b>Will</b> + subject + <b>be</b> + <b>verb with ing</b> <br /> <b>Will</b> you <b>be singing</b> in the concert tomorrow? <br />
                            <b>Will</b> they be finishing their homework by tomorrow?</p>
                        </div>
                        <hr />
                    </div>

                    <div>
                        <CollapseTitle name="Present perfect" id="#presentPerfect" />
                        <div className="collapse" id="presentPerfect">
                            <h6>Affirmative</h6>
                            <p>Subject + <b>have/has</b> + <b>verb in past participle</b> + object <br />  He <b>has completed</b> the task <br />I <b>have finished</b> my homework.</p>
                            <h6>Negative</h6>
                            <p>Subject + <b>have/has</b> + <b>not</b> + <b>verb in past participle</b> + object <br /> He <b>hasn't</b> <b>completed</b> the task <br /> She <b>has not eaten</b> breakfast yet.</p>
                            <h6>Interrogative</h6>
                            <p><b>Have/has</b> + subject + <b>verb in past participle</b> + object + ?  <br /> <b>Has</b> he <b>completed</b> the task? <br /><b>Have</b> they <b>seen</b> the new movie?</p>
                        </div>
                        <hr />

                        <CollapseTitle name="Past perfect" id="#pastPerfect" />
                        <div className="collapse" id="pastPerfect">
                            <h6>Affirmative</h6>
                            <p>Subject + <b>had</b> + <b>past participle</b> + complement <br />
                            She <b>had</b> finished the test <br />
                            She <b>had finished</b> her homework before dinner.</p>
                            <h6>Negative</h6>
                            <p>Subject + <b>had not/hadn't</b> + <b>past participle</b> + complement <br /> She <b>hadn't finished</b> the test <br />They <b>had not seen</b> that movie.</p>
                            <h6>Interrogative</h6>
                            <p><b>Had</b> + subject + <b>past participle</b> + complement <br /> <b>Had</b> she <b>finished</b> the test?<br /><b>Had</b> he <b>completed</b> the project on time?</p>
                        </div>
                        <hr />

                        <CollapseTitle name="Future Perfect" id="#futurePerfect" />
                        <div className="collapse" id="futurePerfect">
                            <h6>Affirmative</h6>
                            <p>Subject + <b>will + have </b> + <b>past participle</b> + complement <br />  She <b>will has</b> finished the test <b>He <b>will has created </b> a new project</b></p>
                            <h6>Negative</h6>
                            <p>Subject + <b>will + not + have</b> + <b>past participle</b> + complement <br /> She <b>won't has finished</b> the test</p>
                            <h6>Interrogative</h6>
                            <p><b>Will</b> + subject + <b> have + past participle</b> + complement <br /> <b>Will</b> she <b> has finished</b> the test?</p>
                        </div>
                        <hr />

                    </div>

                    <CollapseTitle name="Determinants a/an" id="#determinants" />
                    <div className="collapse" id="determinants">
                        <p>The easiest way to use a/an is to identify if the word we want to allude to begins with a vowel, if so we use an (an apple). If it starts with a consonant, we use a (a pizza). It should be noted that there are times when this trick doesn't apply.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default English