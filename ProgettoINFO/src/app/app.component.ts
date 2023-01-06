import { Component } from '@angular/core';
import * as mysql from 'mysql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgettoINFO';
}

async function connessione() {
  const connection = mysql.createConnection({
    host: '213.140.22.237\SQLEXPRESS',
    user: 'salvini.matteo',
    password: 'xxx123##',
    database: 'salvini.matteo'
  });
  return connection;
}

async function getVerifiche() {
  const connection = await connessione()
  connection.connect();
  const result = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM VERIFICA', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });

  connection.end();

  return result;
}
async function getDocente() {
  const connection = await connessione()
  connection.connect();
  const result = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Docente', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });

  connection.end();

  return result;
}
async function getIdea() {
  const connection = await connessione()
  connection.connect();
  const result = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Idea', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });

  connection.end();

  return result;
}
async function getScarica() {
  const connection = await connessione()
  connection.connect();
  const result = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Scarica', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });

  connection.end();

  return result;
}
async function getTag() {
  const connection = await connessione()
  connection.connect();
  const result = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Tag', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });

  connection.end();

  return result;
}
async function getPossiede() {
  const connection = await connessione()
  connection.connect();
  const result = await new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Possiede', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });

  connection.end();

  return result;
}