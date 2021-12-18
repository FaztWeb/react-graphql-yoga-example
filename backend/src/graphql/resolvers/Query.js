import Message from "../../models/Message";

const Query = {
  ping() {
    return "pong";
  },
  messages: async () => {
    return await Message.find();
  },
};

export default Query;
