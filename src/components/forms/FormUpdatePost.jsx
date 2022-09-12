import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const FormUpdatePost = ({ values }) => {
  // const [update, setUpdate] = useState(true);
  // console.log(values);
  // const [defaultVa, setDefaultValues] = useState({
  //   title: values.title,
  //   subtitle: values.subtitle,
  //   content: values.content,
  // });
  // const { userAuth } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(defaultVa);

  // useEffect(() => {
  //   // updatePost();
  //   // console.log("dsfidsf");
  //   setDefaultValues({
  //     title: values.title,
  //     subtitle: values.subtitle,
  //     content: values.content,
  //   });
  //   setUpdate(!update);
  // }, [values]);

  // const getPost = async () => {
  //   await axios
  //     .get(`http://localhost:3002/posts/${id}`)
  //     .then((res) => setDefaultValues({ subtitle: "holll" }));
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  // const { content, title, subtitle } = control._formValues;
  // console.log(control._formValues);

  const updatePost = async (v) => {
    await axios.patch(`http://localhost:3002/posts/${id}`, v);
    navigate("/posts");
  };

  return (
    <Form onSubmit={handleSubmit(updatePost)}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          defaultValue={values.title}
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && "Title is not modified"}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Subtitle"
          name="subtitle"
          defaultValue={values.subtitle}
          {...register("subtitle", { required: true })}
        />
        {errors.subtitle?.type === "required" && "Subtitle is not modified"}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Content"
          name="content"
          defaultValue={values.content}
          style={{ minHeight: "150px" }}
          {...register("content", { required: true })}
        />
        {errors.content?.type === "required" && "Content is not modified"}
      </Form.Group>

      <Button className="w-50 d-block mx-auto" variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};
