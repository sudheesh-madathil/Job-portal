const Message = require("../../models/employer/Message.js");
const Conversation = require("../../models/employer/conversation.js");
const User = require("../../models/User/userRegisters"); // Make sure you have the correct path for your User model
const employer = require("../../models/employer/EMRegistrationSchema");
exports.post = async (req, res) => {
  try {
    const { message } = req.body;
    console.log(message, "user message"); // Corrected logging

    const { senderId, receiverId } = req.params;
    console.log(senderId, "sender id"); // Corrected logging
    console.log(receiverId, "receiver id"); // Corrected logging

    const sender = await  User||employer.findById(senderId);
    const receiver = await employer|| User.findById(receiverId);

    if (!sender) {
      return res.status(404).json({ error: "Sender not found" });
    }

    if (!receiver) {
      return res.status(404).json({ error: "Receiver not found" });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id); // Assuming you have a 'messages' field in the Conversation model

    // socket io (Assuming this is where you'll emit the event)
    // io.emit('message', newMessage);

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//get messages

exports.getMessages = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;
    console.log(senderId, "sender backend id"); // Corrected logging
    console.log(receiverId, "receiver backend id"); // Corrected logging

    // Find the conversation based on sender and receiver IDs
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages"); // Populate messages to get message details

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    // Return the messages
    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessages controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get all user in sidebar

exports.getAlluser = async (req, res) => {
  try {
    const allUsers = await User.find({}).select("_id fullName");
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in getAlluser controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
//find sender id for using user


exports.getUniqueReceiverIds = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    console.log("receiverId:", receiverId); // Debugging line to ensure receiverId is being extracted correctly

    // Fetch messages where receiverId matches
    const messages = await Message.find({ receiverId }).select("senderId");

    // Extract unique senderIds by using a Set
    const uniqueSenderIds = [...new Set(messages.map(msg => msg.senderId))];
    console.log("Unique Sender IDs:", uniqueSenderIds); // Debugging line to see the unique IDs

    // Send the array as JSON response
    res.status(200).json(uniqueSenderIds);
  } catch (error) {
    console.log("Error in getUniqueReceiverIds controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};




