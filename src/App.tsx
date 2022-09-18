import { useState } from 'react';
import './App.css';
import { Projects } from './helpers/Projects';

const App = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<string | undefined>('');

  const modalOpener = (path: string | undefined) => {
    setModalImg(path);
    setModal(true);
  };

  return (
    <section>
      <table className="w-full max-w-7xl m-auto text-white text-center border-lime-300 border-separate border-spacing-y-1 shadow-xl">
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

              <td className='text-cyan-300 sm:text-white sm:hover:text-cyan-300 sm:cursor-pointer'>
                <h2></h2>

                {item.id !== 9 &&
                  <p>
                    <button className={`${index % 2 === 0 ? 'shadow-custom-inner-1 bg-slate-500'
                      : 'shadow-custom-inner-2'} rounded-xl px-2`}
                      onClick={() => modalOpener(item.preview)}
                    >Preview</button>
                  </p>
                }

                <figure className={`${modal && item.preview === modalImg
                  ? 'fixed inset-0 flex items-center justify-center cursor-default' : 'hidden'}`}
                >
                  <div className='relative'>
                    <span className='absolute top-2 right-2 cursor-pointer'
                      onClick={() => setModal(false)}
                    >❌</span>
                    <img className='bg-slate-500 p-5 rounded-xl' src={modalImg} alt="preview" />
                  </div>
                </figure>
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
                    className="pt-1 w-max text-cyan-300 sm:text-white hover:text-cyan-300"
                    target="_blanck"
                  >Repositório</a> <br />

                  {item.link.deploy &&
                    <a href={item.link.deploy}
                      className="pt-1 w-max text-cyan-300 sm:text-white hover:text-cyan-300"
                      target="_blanck"
                    >Deploy</a>
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