import './App.css';
import { Projects } from './helpers/Projects';

const App = () => {
  return (
    <section>
      <table className="w-full text-white text-center border-lime-300 border-separate border-spacing-y-1 shadow-xl">
        <thead className=" hidden sm:table-header-group bg-slate-900">
          <tr>
            <th></th>
            <th>Título</th>
            <th>Sobre</th>
            <th>Status</th>
            <th>Rotas</th>
          </tr>
        </thead>

        <tbody>
          {Projects.map((item, index) => (
            <tr className={`bg-slate-700 flex flex-col sm:table-row mb-2 sm:hover:opacity-90`} key={index}>

              <td className='sm:text-white sm:hover:text-cyan-500 sm:cursor-pointer'>
                <h2></h2>
                {item.id !== 9 &&
                  <p><button>Preview</button></p>
                }
              </td>

              <td>
                <h2>Título</h2> <p>{item.title}</p>
              </td>

              <td>
                <h2>Sobre</h2> <p>{item.about}</p>
              </td>

              <td title={item.status ? 'Concluído' : 'Em desenvolvimento'}>
                <h2>Status</h2><p>{item.status ? '✅' : '⚠️'}</p>
              </td>

              <td>
                <h2>Rotas</h2>
                <p>
                  <a href={item.link.repository}
                    className="pt-1 w-max text-cyan-500 sm:text-white hover:text-cyan-500"
                    target="_blanck"
                  >
                    Repositório
                  </a> <br />
                  {item.id !== 9 &&
                    <a href={item.link.deploy}
                      className="pt-1 w-max text-cyan-500 sm:text-white hover:text-cyan-500"
                      target="_blanck">
                      Deploy
                    </a>
                  }
                </p>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default App;