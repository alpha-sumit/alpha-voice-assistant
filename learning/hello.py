def alpha_response(message):
    message = message.lower()

    if message == "hello":
        return "Hello! I am Alpha."

    elif message == "who are you":
        return "I am Alpha, your virtual voice assistant."

    elif message == "help":
        return "I can answer simple commands for now."

    elif message == "bye":
        return "Goodbye! See you later."

    else:
        return "I don't understand that yet."

print("================================")
print("        ALPHA v0.1")
print("================================")
print("Type 'bye' to exit.")

while True:
    user_message = input("You: ")

    response = alpha_response(user_message)

    print("Alpha:", response)

    if user_message.lower() == "bye":
        break