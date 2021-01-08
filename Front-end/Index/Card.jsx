const Card = () => {

    const [student, setStudent] = React.useState([])
    const [render, setRender] = React.useState(false)
    const [msg, setMsg] = React.useState(false)

    React.useEffect(async () => {
        const url = "http://recode/Integracao_ReactPHP/Back-end/"
        const response = await fetch(url)
        setStudent(await response.json())
    }, [render])

    function registerStudent(event) {
        event.preventDefault();
        //console.log(event.target)

        let formData = new FormData(event.target);
        const url = "http://recode/Integracao_ReactPHP/Back-end/register-student.php";
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((dados) => {
                setRender(!render)
                setMsg(dados)
                setTimeout(
                    () => {
                        setMsg(false)
                    },
                    3000)

            })
    }
    
    return (
        <div className="container py-5">
            <div className="card w-75 mx-auto border-0">
                <form onSubmit={registerStudent}>
                    <input className="form-control" type="text" name="name" placeholder="Nome" />
                    <input className="form-control" type="text" name="telefone" placeholder="Telefone" />
                    <button className="btn btn-info w-100" type="submit">Cadastrar estudante</button>
                </form>
            </div>

            { msg == true && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                Cadastro efetuado com sucesso!
            </div>}

            {student.map((student) => {
                return (
                    <div className="card w-75 mx-auto mt-4" key={student.id}>
                        <div className="card-header">
                            {student.name}
                        </div>
                        <div className="card-body">
                            {student.telephone}
                        </div>
                    </div>
                );
            })}
        </div>

    )
}