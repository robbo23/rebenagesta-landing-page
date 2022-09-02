import Button from 'components/ui/Button';
import Input from 'components/ui/Inputs/Input';
import Textarea from 'components/ui/Inputs/Textarea';
import { useState } from 'react';

const Form = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: `${e.target.message.value}\n\n\n Wysłano z Landing Page!`
    };
    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data)
    };

    const response = await fetch(endpoint, options);

    if (response.ok) {
      alert(`Wiadomość została wysłana!`);
    } else {
      alert(`Wystąpił błąd. Spróbuj ponownie.!`);
    }

    setLoading(false);
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.phone.value = '';
    e.target.message.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" id="name" placeholder="Imie i nazwisko" required />
      <Input name="email" id="email" placeholder="Adres e-mail" required />
      <Input name="phone" id="phone" placeholder="Numer telefonu" />
      <Textarea name="message" id="message" placeholder="Wiadomość" required />
      {/*<button type="submit">Wyślij</button>*/}
      <Button type="submit" color="yellow" className="w-full" loading={loading}>
        Wyślij zapytanie
      </Button>
    </form>
  );
};

export default Form;
