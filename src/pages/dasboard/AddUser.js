import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    nombre,
    apellido,
    fecha_nacimiento,
    handleChange,
    clearValues,
    createUser,
  } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !fecha_nacimiento) {
      displayAlert();
      return;
    }

    await createUser();
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form action='' className='form'>
        {showAlert && <Alert />}

        <div className='form-center'>
          {/* nombre */}
          <FormRow
            type='text'
            name='nombre'
            value={nombre}
            handleChange={handleUserInput}
          />
          {/* apellido */}
          <FormRow
            type='text'
            name='apellido'
            value={apellido}
            handleChange={handleUserInput}
          />
          {/* job location */}
          <FormRow
            type='date'
            labelText='fecha de nacimiento'
            name='fecha_nacimiento'
            value={fecha_nacimiento}
            handleChange={handleUserInput}
          />

          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              type='submit'
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
