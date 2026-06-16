# Results

## Queries-joins01.sql: Get students with class name

```text
       student_name       |               email               | class_name
--------------------------+-----------------------------------+------------
 Armand Hilll             | lera_hahn@dickens.org             | FEB12
 Stephanie Wolff          | darius.homenick@tod.ca            | FEB12
 Stan Miller              | mcdermott.maxie@schoen.com        | FEB12
 Elliot Dickinson         | derrick_pollich@gmail.com         | FEB12
 Lloyd Boehm              | ebba.deckow@yahoo.com             | FEB12
 Erna Cassin              | miguel.barrows@yahoo.com          | FEB12
 Edison Brown             | alysha.daniel@boyer.tv            | FEB12
 Lionel Morar             | bradtke.mallie@yahoo.com          | FEB12
 Donnie Lueilwitz         | kattie_dibbert@winnifred.name     | FEB12
 Obie Howell              | elisha_wisoky@gmail.com           | FEB12
 Hiram Veum               | kristopher.shanahan@gmail.com     | FEB12
 Lynn Kilback             | gaetano_cummerata@hotmail.com     | FEB12
 Brian Jones              | percy_ratke@cornelius.biz         | FEB12
 Clint Cremin             | everardo_kovacek@joshuah.net      | FEB12
 Maximillia Willms        | destin_berge@toy.com              | FEB12
 Carmel Grant             | marcelino_durgan@hotmail.com      | FEB12
 Colten Gutkowski         | rollin_okuneva@jerde.org          | FEB12
...
(172 rows)
```

## Queries-joins02.sql: Get enrolled students with class_name

```text
    student_name     |               email               | class_name
---------------------+-----------------------------------+------------
 Deon Hahn           | loy_heathcote@yahoo.com           | NOV19
 Sean Bartell        | ritchie.coty@effertz.org          | NOV19
 Sarai Flatley       | kirk.boyer@noelia.net             | NOV19
 Billie Mitchell     | alfredo.littel@gmail.com          | NOV19
 Vance Kihn          | soledad.wisozk@hotmail.com        | NOV19
 Brook Fadel         | savanna.will@louisa.io            | NOV19
 Briana Leffler      | conroy.deja@yahoo.com             | NOV19
 Santino Oberbrunner | cicero_greenholt@quitzon.info     | NOV19
 Shannon Tromp       | jayden_bahringer@hotmail.com      | NOV19
 Aurore Yundt        |                                   | NOV19
 Cory Toy            |                                   | NOV19
 Magali Rolfson      | cortney.balistreri@wintheiser.net | NOV19
 Kurt Turcotte       |                                   | NOV19
 Elda McClure        |                                   | NOV19
 Tessie Wisozk       | elmer_kilback@camren.io           | NOV19
 Ike Lockman         | goodwin_zelda@gmail.com           | NOV19
 Bart Leuschke       | aubree_sipes@brekke.us            | NOV19
 Luisa Sipes         |                                   | NOV19
 Jacinthe Skiles     | ruben.prohaska@schowalter.tv      | NOV19
 Delores Gibson      | lehner_mustafa@sipes.com          | NOV19
 Marge Padberg       | fadel.hulda@yahoo.com             | NOV19
 Bertha Johnson      |                                   | NOV19
(22 rows)
```

## Queries-joins03.sql: Get rollover students

```text
   student_name   | class_name | student_start_date | class_start_date
------------------+------------+--------------------+------------------
 Okey Jaskolski   | APR09      | 2018-03-12         | 2018-04-09
 Elise Carter     | JUN04      | 2018-05-07         | 2018-06-04
 Peggie Batz      | JUN04      | 2018-05-07         | 2018-06-04
 Lurline Franecki | JUL02      | 2018-06-04         | 2018-07-02
 Johnathon Kohler | JUL02      | 2018-06-04         | 2018-07-02
 Felipe Kessler   | JUL02      | 2018-06-04         | 2018-07-02
 Jaime Shanahan   | SEP24      | 2018-08-27         | 2018-09-24
 Deon Hahn        | NOV19      | 2018-10-22         | 2018-11-19
(8 rows)
```

## Queries-joins04.sql: Get the total amount of time that a student has spent on all assignments

```text
   student_name   | total_time
------------------+------------
 Ibrahim Schimmel |       6888
(1 row)
```

## Queries-joins05.sql: Get the total amount of time that a student has spent on all assignments per class

```text
 class_name | total_time
------------+------------
 FEB12      |     373501
(1 row)
```

## Queries-joins06.sql: Get all classes if it has 18 or more students

```text
       student       | total_submissions
---------------------+-------------------
 Magali Rolfson      |               350
 Hayden Cronin       |               121
 Vance Kihn          |               342
 Bart Leuschke       |               346
 Hadley Corkery      |               121
 Jessika Jenkins     |               122
 Cory Toy            |               350
 Ibrahim Schimmel    |               121
 Ike Lockman         |               245
 Santino Oberbrunner |               244
 Eunice Morar        |               117
 Tessie Wisozk       |               348
 Sean Bartell        |               339
 Darien Luettgen     |               122
 Freeman Marks       |               117
 Deon Hahn           |               348
 Hettie Hettinger    |                75
 Jerrold Lindgren    |               121
 Florida Turner      |               123
 Billie Mitchell     |               343
 Shannon Tromp       |               257
 Javonte Ward        |                84
 Bertha Johnson      |               341
 Elda McClure        |               344
 Marge Padberg       |               350
 Brook Fadel         |               348
 Marisa Rau          |               119
 Aurore Yundt        |               347
 Luisa Sipes         |               347
 Nola Jerde          |               123
 Jerrold Rohan       |               121
 Kurt Turcotte       |               346
 Vivienne Larson     |               121
 Fannie Hammes       |               120
 Ibrahim Lubowitz    |               119
 Briana Leffler      |               255
 Delores Gibson      |               350
 Jacinthe Skiles     |               348
 Trace Mohr          |               120
 Sarai Flatley       |               343
 Jeramie Volkman     |               121
 Holly Nitzsche      |               122
(42 rows)
```

## Queries-joins07.sql: Get total submissions from all students WHERE submissions are less than 100

```text
     student      | total_submissions
------------------+-------------------
 Hettie Hettinger |                75
 Javonte Ward     |                84
(2 rows)
```

## Queries-group-by01.sql: Get total assignments per day

```text
 day | total_assignments
-----+-------------------
   1 |                11
   2 |                 9
   3 |                 9
   4 |                 9
   5 |                 7
   6 |                 6
   7 |                 7
   8 |                 9
   9 |                12
  10 |                 9
  11 |                 7
  12 |                 9
  13 |                 5
  14 |                 5
  15 |                 9
  16 |                 9
  17 |                 9
  18 |                 6
  19 |                 8
  20 |                 8
...
(51 rows)
```

## Queries-group-by02.sql: Get total assignments per day if greater or equal than 10

```text
 day | total_assignments
-----+-------------------
   1 |                11
   9 |                12
  22 |                10
  23 |                10
  24 |                10
  29 |                10
  30 |                11
  36 |                10
  37 |                10
  39 |                10
  43 |                10
  44 |                11
  45 |                10
  46 |                11
  51 |                12
(15 rows)
```

## Queries-group-by03.sql: Get all classes if it has 18 or more students

```text
 class_name | total_students
------------+----------------
 FEB12      |             18
 APR09      |             19
 JUN04      |             19
 NOV19      |             22
 SEP24      |             22
(5 rows)
```

## Queries-group-by04.sql: Get total submissions per class

```text
 class_name | total_submissions
------------+-------------------
 SEP24      |              9328
 JUN04      |              8030
 APR09      |              7935
 NOV19      |              7231
 JUL02      |              5868
 MAY07      |              5843
 FEB12      |              5440
 JUL30      |              4664
 OCT22      |              4626
 AUG27      |              4589
 MAR12      |              3002
(11 rows)
```

## Queries-group-by05.sql: Get enrolled students avg time completion

```text
    student_name     |     average_time
---------------------+----------------------
 Hettie Hettinger    | 140.0000000000000000
 Santino Oberbrunner | 139.2418032786885246
 Vance Kihn          |  99.9926900584795322
 Jerrold Rohan       |  99.2768595041322314
 Vivienne Larson     |  96.0950413223140496
 Sean Bartell        |  94.8303834808259587
 Fannie Hammes       |  94.7916666666666667
 Javonte Ward        |  93.8690476190476190
 Bart Leuschke       |  93.6560693641618497
 Bertha Johnson      |  93.3357771260997067
 Ike Lockman         |  92.0816326530612245
 ...
(42 rows)
```

## Queries-group-by06.sql: Get enrolled students completion time if it is less than average completion tim

```text
  student_name  |    average_time     | average_estimated_time
----------------+---------------------+------------------------
 Delores Gibson | 41.2971428571428571 |    53.7571428571428571
 Cory Toy       | 41.8800000000000000 |    53.7571428571428571
 Nola Jerde     | 42.2764227642276423 |    54.3089430894308943
 Florida Turner | 42.5934959349593496 |    54.3089430894308943
(4 rows)
```

## Queries-in01.sql: Get total assistance requests for an instructor

```text
 total_assistances | instructor_name
-------------------+-----------------
              4227 | Waylon Boehm
(1 row)
```

## Queries-in02.sql: Get total assistance per student

```text
 total_assistances |   student_name
-------------------+------------------
               138 | Elliot Dickinson
(1 row)
```

## Queries-in03.sql: Get important data about each assistance request.

```text
     instructor     |         student          |        assignment        | assistance_duration
--------------------+--------------------------+--------------------------+---------------------
 Helmer Rodriguez   | Maximillian Pfannerstill | Expedita officia         | 00:02:45
 Georgiana Fahey    | Gene Carter              | Ut fuga                  | 00:02:45
 Roberto Towne      | Vivien Mosciski          | Ea totam iste            | 00:02:45
 Cheyanne Powlowski | Vivien Mosciski          | Eum eaque                | 00:02:45
 Rosalyn Raynor     | Gene Carter              | Porro placeat velit      | 00:03:00
 Roberto Towne      | Maximillia Willms        | Quibusdam est            | 00:03:00
 Georgiana Fahey    | Fernando Senger          | Consequuntur rerum       | 00:03:15
 Alessia Zemlak     | Lizzie Wunsch            | Laudantium non provident | 00:03:15
 Roberto Towne      | Maximillia Willms        | Debitis harum provident  | 00:03:15
 Jadyn Bosco        | Lizzie Wunsch            | Optio aspernatur nobis   | 00:03:15
(26299 rows)
```

## Queries-in04.sql: Get avg assistance request duration

```text
 avg_assistance_request_duration
---------------------------------
 00:14:21.556903
(1 row)
```

## Queries-in05.sql: Get avg duration assistance per class

```text
 class | avg_duration_assistance
-------+-------------------------
 SEP24 | 00:13:23.071576
 JUL30 | 00:13:23.956547
 FEB12 | 00:13:42.66022
 JUN04 | 00:13:45.974562
 MAY07 | 00:13:58.745754
 JUL02 | 00:13:59.152542
 AUG27 | 00:14:15.572792
 NOV19 | 00:14:34.16273
 OCT22 | 00:15:22.121838
 APR09 | 00:15:39.425113
 MAR12 | 00:15:44.556041
(11 rows)
```

## Queries-in06.sql: Get class longest assistances

```text
 class | avg_duration_assistance
-------+-------------------------
 MAR12 | 00:15:44.556041
(1 row)
```

## Queries-in07.sql: Get avg request wait time

```text
 average_wait_time
-------------------
 00:08:46.258793
(1 row)
```

## Queries-in08.sql: Get the total duration of all assistance requests for each class

```text
 class | total_duration
-------+----------------
 JUL30 | 390:35:20
 AUG27 | 398:19:00
 JUL02 | 453:50:30
 NOV19 | 462:34:40
 MAY07 | 480:10:55
 OCT22 | 496:09:10
 MAR12 | 540:45:30
 FEB12 | 602:35:55
 JUN04 | 667:26:00
 SEP24 | 754:13:05
 APR09 | 862:26:40
(11 rows)
```

## Queries-in09.sql: Get the average total duration of assistance requests for each class

```text
 avg_total_duration
--------------------
 555:22:25.909091
(1 row)
```

## Queries-in10.sql: Get total assistance requests per assignments

```text
 id  | day | chapter |                name                | total_assistances
-----+-----+---------+------------------------------------+-------------------
 424 |  51 |      12 | Ullam cumque                       |               143
 423 |  51 |      11 | Culpa esse sint                    |               113
  45 |   5 |       7 | Quia quasi                         |                86
  50 |   6 |       5 | A rerum                            |                83
 141 |  17 |       9 | Illo error dolor                   |                82
 422 |  51 |      10 | Magni nihil                        |                81
 112 |  14 |       3 | Est veniam                         |                81
  28 |   3 |       8 | Ratione quae                       |                80
 104 |  12 |       9 | Facere qui                         |                79
 275 |  34 |       6 | Illo fugiat                        |                79
(424 rows)
```

## Queries-in11.sql: Get total assignment duration per day

```text
 day | number_of_assignments | total_duration
-----+-----------------------+----------------
   1 |                    11 |            590
   2 |                     9 |            585
   3 |                     9 |            425
   4 |                     9 |            380
   5 |                     7 |            405
   6 |                     6 |            315
   7 |                     7 |            330
   8 |                     9 |            570
   9 |                    12 |            545
  10 |                     9 |            465
  (51 rows)
```

## Queries-in12.sql: Get instructors assisted class

```text
     instructor     | class
--------------------+-------
 Cheyanne Powlowski | JUL02
 Georgiana Fahey    | JUL02
 Helmer Rodriguez   | JUL02
 Jadyn Bosco        | JUL02
 Roberto Towne      | JUL02
 Rosalyn Raynor     | JUL02
 Talon Gottlieb     | JUL02
 Waylon Boehm       | JUL02
(8 rows)
```

## Queries-in13.sql: Get instructors assisted class with the total number of assistances performed

```text
     instructor     | class | total_assistances
--------------------+-------+-------------------
 Cheyanne Powlowski | JUL02 |               336
 Georgiana Fahey    | JUL02 |               158
 Helmer Rodriguez   | JUL02 |               157
 Jadyn Bosco        | JUL02 |               177
 Roberto Towne      | JUL02 |               170
 Rosalyn Raynor     | JUL02 |               331
 Talon Gottlieb     | JUL02 |               299
 Waylon Boehm       | JUL02 |               319
(8 rows)
```
