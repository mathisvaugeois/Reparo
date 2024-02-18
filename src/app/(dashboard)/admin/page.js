import User from "@/components/User";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import '@/styles/bootstrap.css';
import '@/styles/Chart.min.css';
import '@/styles/perfect-scrollbar.css';
import '@/styles/app.css';

export default async function Admin() {
    const session = await getServerSession(authOptions);

    if (session?.user) {
        return (
        <>
            <div id="app" bgcolor="#000000">
                <div id="main">
                <script src="../js/feather.min.js"></script>
                <script src="../js/perfect-scrollbar.min.js"></script>
                <script src="../js/app.js"></script>
                <script src="../js/Chart.min.js"></script>
                <script src="../js/apexcharts.min.js"></script>
                <script src="../js/dashboard.js"></script>
                <script src="../js/main.js"></script>
                    <div class="main-content container-fluid">
                        <h2> Admin page - bon retour {session?.user.username} </h2>
                        <section class="section">
                            <div class="row mb-2">
                                <div class="col-12 col-md-3">
                                    <div class="card card-statistic">
                                        <div class="card-body p-0">
                                            <div class="d-flex flex-column">
                                                <div class='px-3 py-3 d-flex justify-content-between'>
                                                    <h3 class='card-title'>Nombre de comptes</h3>
                                                    <div class="card-right d-flex align-items-center">
                                                        <p>4</p>
                                                    </div>
                                                </div>
                                                <div class="chart-wrapper">
                                                    <canvas id="canvas1" style={{height:"100px !important"}}></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3">
                                    <div class="card card-statistic">
                                        <div class="card-body p-0">
                                            <div class="d-flex flex-column">
                                                <div class='px-3 py-3 d-flex justify-content-between'>
                                                    <h3 class='card-title'>Nombre d'utilisateurs (24h)</h3>
                                                    <div class="card-right d-flex align-items-center">
                                                        <p>2</p>
                                                    </div>
                                                </div>
                                                <div class="chart-wrapper">
                                                    <canvas id="canvas2" style={{height:"100px !important"}}></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3">
                                    <div class="card card-statistic">
                                        <div class="card-body p-0">
                                            <div class="d-flex flex-column">
                                                <div class='px-3 py-3 d-flex justify-content-between'>
                                                    <h3 class='card-title'>Nombre d'annonces</h3>
                                                    <div class="card-right d-flex align-items-center">
                                                        <p>12</p>
                                                    </div>
                                                </div>
                                                <div class="chart-wrapper">
                                                    <canvas id="canvas3" style={{height:"100px !important"}}></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3">
                                    <div class="card card-statistic">
                                        <div class="card-body p-0">
                                            <div class="d-flex flex-column">
                                                <div class='px-3 py-3 d-flex justify-content-between'>
                                                    <h3 class='card-title'>Prix moyen par annonces</h3>
                                                    <div class="card-right d-flex align-items-center">
                                                        <p>12€</p>
                                                    </div>
                                                </div>
                                                <div class="chart-wrapper">
                                                    <canvas id="canvas4" style={{height:"100px !important"}}></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-md-8">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class='card-heading p-1 pl-3'>Revenus</h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4 col-12">
                                                    <div class="pl-3">
                                                        <h1 class='mt-5'>120€</h1>
                                                        <p class='text-xs'><span class="text-green"><i data-feather="bar-chart"
                                                                                                    width="15"></i> +100%</span> que le dernier mois</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 col-12">
                                                    <canvas id="bar"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between align-items-center">
                                            <h4 class="card-title">Utilisateurs</h4>
                                            <div class="d-flex ">
                                                <i data-feather="download"></i>
                                            </div>
                                        </div>
                                        <div class="card-body px-0 pb-0">
                                            <div class="table-responsive">
                                                <table class='table mb-0' id="table1">
                                                    <thead>
                                                    <tr>
                                                        <th>Nom</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Region</th>
                                                        <th>Status</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Graiden</td>
                                                        <td>vehicula.aliquet@semconsequat.co.uk</td>
                                                        <td>0603020195</td>
                                                        <td>Normandie</td>
                                                        <td>
                                                            <span class="badge bg-success">Active</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dale</td>
                                                        <td>fringilla.euismod.enim@quam.ca</td>
                                                        <td>0204527693</td>
                                                        <td>Grand Est</td>
                                                        <td>
                                                            <span class="badge bg-success">Active</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nathaniel</td>
                                                        <td>mi.Duis@diam.edu</td>
                                                        <td>0621657627</td>
                                                        <td>Guadeloupe</td>
                                                        <td>
                                                            <span class="badge bg-danger">Inactive</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Darius</td>
                                                        <td>velit@nec.com</td>
                                                        <td>0209690787</td>
                                                        <td>Réunion</td>
                                                        <td>
                                                            <span class="badge bg-success">Active</span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card ">
                                        <div class="card-header">
                                            <h4>Du dernier mois</h4>
                                        </div>
                                        <div class="card-body">
                                            <div id="radialBars"></div>
                                            <div class="text-center mb-5">
                                                <h1 class='text-green'>+120€</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card widget-todo">
                                        <div
                                                class="card-header border-bottom d-flex justify-content-between align-items-center">
                                            <h4 class="card-title d-flex">
                                                <i class='bx bx-check font-medium-5 pl-25 pr-75'></i>Progress
                                            </h4>

                                        </div>
                                        <div class="card-body px-0 py-1">
                                            <table class='table table-borderless'>
                                                <tr>
                                                    <td class='col-3'>UI Design</td>
                                                    <td class='col-6'>
                                                        <div class="progress progress-info">
                                                            <div class="progress-bar" role="progressbar" style={{width: "60%"}}
                                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td class='col-3 text-center'>60%</td>
                                                </tr>
                                                <tr>
                                                    <td class='col-3'>ReactJS</td>
                                                    <td class='col-6'>
                                                        <div class="progress progress-success">
                                                            <div class="progress-bar" role="progressbar" style={{width: "35%"}}
                                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td class='col-3 text-center'>70%</td>
                                                </tr>
                                                <tr>
                                                    <td class='col-3'>Prisma</td>
                                                    <td class='col-6'>
                                                        <div class="progress progress-danger">
                                                            <div class="progress-bar" role="progressbar" style={{width: "50%"}}
                                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td class='col-3 text-center'>100%</td>
                                                </tr>
                                                <tr>
                                                    <td class='col-3'>HTML</td>
                                                    <td class='col-6'>
                                                        <div class="progress progress-primary">
                                                            <div class="progress-bar" role="progressbar" style={{width: "80%"}}
                                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td class='col-3 text-center'>80%</td>
                                                </tr>
                                                <tr>
                                                    <td class='col-3'>CSS</td>
                                                    <td class='col-6'>
                                                        <div class="progress progress-secondary">
                                                            <div class="progress-bar" role="progressbar" style={{width: "65%"}}
                                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td class='col-3 text-center'>65%</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <h2>Client Session</h2>
                    <User />
                    <h2> Server Session </h2>
                    {JSON.stringify(session)}
                </div>
            </div>
        </>)
    }

    return <p>Vous devez vous connecter pour voir cette page.</p>;
}