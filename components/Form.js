import Button from 'components/ui/Button';
import Input from 'components/ui/Inputs/Input';
import Textarea from 'components/ui/Inputs/Textarea';

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstname: e.target.name.value,
      email: e.target.email.value,
      tel: e.target.phone.value,
      message_content: `${e.target.message.value}\n\n\n Wysłano z Landing Page!`,
      checkboxes: [],
      type: 'CONTACT_EMAIL'
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = 'https://rebenagesta.com/api/contact';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata
    };

    try {
      const response = await fetch(endpoint, options);

      const result = await response.json();
      alert(`Is this your full name: ${result.data}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" placeholder="Imie i nazwisko" required />
      <Input name="email" placeholder="Adres e-mail" required />
      <Input name="phone" placeholder="Numer telefonu" />
      <Textarea name="message" placeholder="Wiadomość" required />
      <Button type="submit" color="yellow" className="w-full">
        Wyślij zapytanie
      </Button>
    </form>
  );
};

export default Form;
