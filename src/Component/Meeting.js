import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Meeting = () => {
    const [loader, setLoader] = useState(true)

    const payload = {
        meetingNumber: "74687194283",
        role: 0,
        sdkKey: "NmzJ_urARPOQm8stmP2ltg",
        sdkSecret: "fX5b7cTBWlN2yaZ39dQQJnRWSC5ODepb",
        userEmail: "a@b.com",
        userName: "Saiful",
        passWord: "zZ2Yvn",
        leaveUrl: "https://salesine-d3728.web.app/",
    };

    useEffect(() => {


        const fetchData = async () => {

            const { ZoomMtg } = await import('@zoomus/websdk');

            // const { ZoomMtgEmbedded } = await import('@zoomus/websdk/embedded');
            // const client = ZoomMtgEmbedded.createClient()


            ZoomMtg.preLoadWasm();
            ZoomMtg.prepareWebSDK();
            const oooooo = async () => {
                await ZoomMtg.setZoomJSLib('https://source.zoom.us/2.10.1/lib', '/av');
            };
            oooooo();

            // ZoomMtg.setZoomJSLib('https://source.zoom.us/2.10.1/lib/av/1502_video.simd.wasm/webim.min.js');


            ZoomMtg.record({
                record: true
            });

            ZoomMtg.showRecordFunction({
                show: true
            });
            // const cloudRecording = client.getRecordingClient()


            ZoomMtg.generateSDKSignature(
                {
                    meetingNumber: payload.meetingNumber,
                    role: payload.role,
                    sdkKey: payload.sdkKey,
                    sdkSecret: payload.sdkSecret,
                    success: function (signatures) {
                        ZoomMtg.init(
                            {
                                leaveUrl: payload.leaveUrl,
                                success: function () {
                                    ZoomMtg.join(
                                        {
                                            meetingNumber: payload.meetingNumber,
                                            signature: signatures.result,
                                            sdkKey: payload.sdkKey,
                                            userEmail: payload.userEmail,
                                            userName: payload.userName,
                                            passWord: payload.passWord,
                                            tk: '',
                                            success: function () {
                                                console.log('----Joined----');
                                            },
                                            error: function (error) {
                                                console.log(error, "Signature Not Found:", signatures.result,);
                                            }
                                        }
                                    )
                                },
                                error: function (error) {
                                    console.log(error);
                                }

                            }
                        )
                    },
                    error: function (error) {
                        console.log(error)
                    }

                }
            )

            setLoader(false);

        };

        fetchData();








    });

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"


    // fetch(` https://api.zoom.us/v2/audiosdk/sessions/${payload.meetingNumber}/events`, {
    // fetch(` https://api.zoom.us/v2/videosdk/sessions/${payload.meetingNumber}/events`, {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     },
    //     body: payload
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);

    //     })
    //     .catch(error => console.log(error.message));



    return (
        <div>
            {
                loader ? <>
                    <Loader></Loader>
                </>
                    :
                    <>

                    </>
            }
        </div>
    );
};

export default Meeting;