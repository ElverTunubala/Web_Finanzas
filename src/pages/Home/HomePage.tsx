import React from "react";
import { Card, Button, Row, Col, ProgressBar } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Dashboard de Finanzas Personales</h1>

      {/* Resumen Financiero */}
      <Row className="mb-4">
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Balance Actual</h5>
              <p className="h4">$15,230.00</p>
              <p className="text-muted">Tu balance total disponible.</p>
              <Button variant="primary" className="w-100">Ver Detalles</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Ahorros</h5>
              <p className="h4">$8,450.00</p>
              <p className="text-muted">Tu total ahorrado hasta el momento.</p>
              <Button variant="primary" className="w-100">Ver Detalles</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Gastos Mensuales</h5>
              <p className="h4">$2,780.00</p>
              <p className="text-muted">Tu total de gastos este mes.</p>
              <Button variant="primary" className="w-100">Ver Detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Gráficos y Visualización */}
      <Row>
        <Col md={6} sm={12} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Progreso de Ahorros</h5>
              <ProgressBar now={65} label="65%" variant="success" />
              <p className="text-muted mt-3">Estás en camino de alcanzar tu objetivo de ahorro de $12,000 este año.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} sm={12} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Distribución de Gastos</h5>
              <div className="d-flex justify-content-between">
                <div className="text-center">
                  <div className="h4">50%</div>
                  <p className="text-muted">Comida</p>
                </div>
                <div className="text-center">
                  <div className="h4">30%</div>
                  <p className="text-muted">Transporte</p>
                </div>
                <div className="text-center">
                  <div className="h4">20%</div>
                  <p className="text-muted">Entretenimiento</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Card de Acciones Rápidas */}
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="card-title">Acciones Rápidas</h5>
              <Row>
                <Col sm={6} className="mb-3">
                  <Button variant="info" className="w-100">Añadir Gasto</Button>
                </Col>
                <Col sm={6} className="mb-3">
                  <Button variant="info" className="w-100">Añadir Ingreso</Button>
                </Col>
                <Col sm={6} className="mb-3">
                  <Button variant="info" className="w-100">Ver Presupuesto</Button>
                </Col>
                <Col sm={6} className="mb-3">
                  <Button variant="info" className="w-100">Ver Reportes</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
