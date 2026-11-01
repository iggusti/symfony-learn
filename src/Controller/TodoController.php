<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TodoController extends AbstractController
{
    #[Route('/', name: 'todo_index')]
    public function index(): Response
    {
        $todos = [
            [
                'id' => 1,
                'title' => 'Belajar Symfony 5.4',
                'description' => 'Pelajari routing, controller, dan template',
                'completed' => false,
                'priority' => 'high',
                'due_date' => '2026-11-05'
            ],
            [
                'id' => 2,
                'title' => 'Buat UI Glassmorphism',
                'description' => 'Desain todo list dengan efek blur dan transparansi',
                'completed' => true,
                'priority' => 'medium',
                'due_date' => '2026-11-02'
            ],
            [
                'id' => 3,
                'title' => 'Push ke GitHub',
                'description' => 'Commit dan push project ke repository',
                'completed' => false,
                'priority' => 'low',
                'due_date' => '2026-11-07'
            ],
            [
                'id' => 4,
                'title' => 'Belajar Twig',
                'description' => 'Mengenal templating engine Symfony',
                'completed' => false,
                'priority' => 'high',
                'due_date' => '2026-11-06'
            ],
            [
                'id' => 5,
                'title' => 'Baca dokumentasi CSS backdrop-filter',
                'description' => 'Pahami cara kerja efek glassmorphism',
                'completed' => true,
                'priority' => 'medium',
                'due_date' => '2026-11-01'
            ]
        ];

        return $this->render('todo/index.html.twig', [
            'todos' => $todos,
        ]);
    }
}
