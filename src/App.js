import React from 'react';

function App() {
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>No. of Tasks</th>
            <th>GitHub link</th>
            <th>Vercel deployment link</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>Task-1</td>
            <td>
              <a target="_blank" href="https://github.com/Divyansh0503/Rtask-1">
                GitHub_Task-1
              </a>
            </td>
            <td>
              <a target="_blank" href="https://rtask-1-gamma.vercel.app/">
                Vercel_Task-1
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-2</td>
            <td>
              <a target="_blank" href="https://github.com/Divyansh0503/Rank-2">
                GitHub_Task-2
              </a>
            </td>
            <td>
              <a target="_blank" href="https://rank-2.vercel.app/">
                Vercel_Task-2
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-3</td>
            <td>
              <a target="_blank" href="https://github.com/Divyansh0503/Rtask-3">
                GitHub_Task-3
              </a>
            </td>
            <td>
              <a target="_blank" href="https://rtask-3-eight.vercel.app/">
                Vercel_Task-3
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-4</td>
            <td>
              <a target="_blank" href="https://github.com/Divyansh0503/Rtask-4">
                GitHub_Task-4
              </a>
            </td>
            <td>
              <a>
                -----
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-5</td>
            <td>
              <a target="_blank" href="https://github.com/Divyansh0503/Rtask-5">
                GitHub_Task-5
              </a>
            </td>
            <td>
              <a target="_blank" href="https://a3-task-05.vercel.app/">
                Vercel_Task-5
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-6</td>
            <td>
              <a target="_blank" href="https://github.com/Divyansh0503/Rtask-6">
                GitHub_Task-6
              </a>
            </td>
            <td>
              <a >
                ------
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;


