function sayHello(name) {
    var context = getContext();
    var response = context.getResponse();
    response.setBody("Hello " + name);
}