import AgoraRTC from 'agora-rtc-sdk-ng';
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
const appId = process.env.REACT_APP_APP_ID;
const channel = process.env.REACT_APP_CHANNEL;
const token = process.env.REACT_APP_TOKEN;

export async function onJoinClick() {
  const uid = await client.join(appId, channel, token, null);
}

export async function onLeaveClick() {
  client.localTracks.forEach((v) => v.close());
  await client.leave();
}

export async function onPublishClick() {
  const localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  await client.publish([localAudioTrack]);
}

export async function onUnpublishClick() {
  await client.unpublish();
}

//notification
client.on("user-joined", async (user) => {
  console.log(`${user} joined`);
});

client.on("user-left", async (user, reason) => {
  console.log(`${user} left because ${reason}`)
});

client.on("user-published", async (user, mediaType) => {
  const track = await client.subscribe(user, mediaType); 
  track.play();
});

client.on("user-unpublished", async (user, mediaType) => {

});

