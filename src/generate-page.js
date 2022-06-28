// map employees from array and generetate html

module.exports = generatePage = employeesArr => {
  //[manager,enginner, intern]

  //function that goes over the array and gives you the manager
  const manager=employeesArr.filter(employee=>employee.getRole()=='Manager')
  const engineer=employeesArr.filter(employee=>employee.getRole()=='Engineer')
  const intern=employeesArr.filter(employee=>employee.getRole()=='Intern')

  const { name, id, email, role, officeNumber } = manager[0];

  return `
  <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="stylesheet" href="../dist/styles.css" />
     <title>Team Profile</title>
   </head>
   <body>
     <header>
       <h1>Team Members</h1>
     </header>
     <main>
       <div id="team">
         <div>
           <div>
             <div>
               <h3>${name}</h3>
               <div>
                 <h4>${manager[0].getRole()}</h4>
               </div>
             </div>
           </div>
           <div>
             <div>
               <p>ID: ${id}</p>
               <hr />
               <p><a href="mailto:${email}">${email}</a></p>
               <hr />
               <p>Office Number: ${officeNumber}</p>
             </div>
           </div>
         </div>
         
         ${engineer
           .map((engineer) => {
             return `<div id="employee-card">
           <div>
             <div>
               <h3>${engineer.name}</h3>
               <div>
                 <h4>${engineer.getRole()}</h4>
               </div>
             </div>
           </div>
           <div>
             <div>
               <p>ID: ${engineer.id}</p>
               <hr />
               <p><a href="mailto:${engineer.email}">${engineer.email}</a></p>
               <hr />
               <p>
                 <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">Github</a>
               </p>
             </div>
           </div>
         </div>`;
           })
           .join(' ')} 
         ${intern
           .map((intern) => {
             return `<div>
           <div>
             <div>
               <h3>${intern.name}</h3>
               <div>
                 <h4>${intern.role}</h4>
               </div>
             </div>
           </div>
           <div>
             <div>
               <p>ID: ${intern.id}</p>
               <hr />
               <p id="body-email"><a href="mailto:${intern.email}">${intern.email}</a></p>
               <hr />
               <p>School: ${intern.school}</p>
             </div>
           </div>
         </div>`;
           })
           .join(' ')} 
       </div>
     </main>
   </body>
 </html>
   `;
};


