
/*
1. Создай функцию выстрела shot(): - ready
	1.1 Увеличивать значение переменной countShot на 1. - ready
	1.2 Выводить модальное окно с количеством сделанных выстрелов. - ready

2. Создай функцию окончания игры endgame(): - ready
   2.1 Выводить модальное окно с сообщением «Конец игры». - ready

3. Создай функции разворота револьвера. - ready

4. Сделать клик по кнопке - ready

5. Сделать пременную bulletPosition - ready
	5.1 Сделать усливие попадания функции - ready

6. Создаnm функцию random(min,max) для получения случайного числа. - ready
	6.1 Присвоить переменной bulletPosition случайное число от 1 до 6. - ready

7. Сделать клик по кнопке «Restart», после чего должна обновляться страница. - ready


1. При нажатии на кнопку "Начать"
   1.1 Сделать кнопку не активной - done
   1.2 Вставить патрон в барабан - done 
   1.3 Начать крутить барабан - done
   1.4 Скрыть пулю - done
   1.5 Записать случайное число ои 1 до 6, это чисо отвечяет за место в барабане - done
   1.6 Отобразить револьвер - done
   1.7 Изменить текст кнопки на "Сделать выстрел" - done
   1.8 Сделать кнопку активной - done
2. При нажатии на кнопку "Сделать выстрел"
   2.1 Проверяеться число выстрела - done
   2.2 Если пуля совподает числу пули в барабане, то персонаж убит - done
   2.3 Иначе револьвер переворачиваеться и далее повторяеться п. 2 - done 
   2.4 При успешном выстреле залит соответствующую кнопку красной жидкостью - done
   2.5 Прокрутить барабан - done
3. При завершении игры
   3.1 Изменить текст кнопки на "Рестарт" - done
   3.2 При нажатии на кнопку рестарт перезагрузить страницу - done
*/ 
// Присваиваем переменной countShot значение 0
var countShot = 0;
// Присваиваем переменной bulletPosition рандомное значение от 1 до 6
var bulletPosition = random(6, 1);
// Выбераем кнопку btnShot по селектору
var btnShot = document.querySelector("#shot");
// Присваиваем переменной currentPlayer значение 1
var currentPlayer = 1;
// Выбераем baraban по селектору
var baraban = document.querySelector("#baraban");
// Клик по пнопки btnShot вызывает функцию start
btnShot.onclick = start;

// Первый клик по кнопке "Начать"
function start() {
	// Активируем класс кнопки btnShot
	btnShot.className = "off";
	// Выбераем bullet по селектору
    var bullet = document.querySelector('#bullet');
        // Присваиваем bullet стил display = block
        bullet.style.display = "block";
    // Выбераем revolver по селектору
    var revolver = document.querySelector("#revolver");
    	// Присваиваем revolver стил display = block
        revolver.style.display = "block";
    // Присваиваем переменной currentPlayer значение 0
    var rotate = 0;
    // В переменной timer храниться функция setInterval
    var timer = setInterval(function() {
    	// Увеличиваем значение rotate на 10 больше
        rotate = rotate + 10;
        // Вращаем барабан
        baraban.style.transform = "rotate(" + rotate + "deg)";
        // Условие если rotate больше 300 тогда скрываем bullet
        if(rotate > 300) {
        	// скрываем bullet
        	bullet.style.display = "none";
        }
        // Условие если rotate равнеться 720 тогда...
        if(rotate == 720) {
           // Отменяем работу таймера
           clearInterval(timer);
            // Меняем текст кнопки на "Сделать выстрел"
            btnShot.innerText = "Сделать выстрел";    
            // Клик по пнопки btnShot вызывает функцию shot
		    btnShot.onclick = shot;
            // Обнуляем класс
		    btnShot.className = "";
        }

    }, 50);
}
// В переменной rotateBaraban храниться значение 0
var rotateBaraban = 0;
// Функция shot
function shot() {
	// Увеличиваем значение countShot на 1 больше
	countShot = countShot + 1;
    // Условие если bulletPosition равен countShot тогда...
	if(bulletPosition == countShot) {
		// Создаем елемент blood
		var blood = document.createElement('div');
		    // Присваеваем id елементу 
			blood.id = "blood";
		// Выбераме пользователя который проиграл
		var player = document.querySelector('#player' + currentPlayer);
		    // Добавляем blood под игрока который проигралл
		    player.appendChild(blood);
		// Выполняем функцию окончания игры
		endGame();
	// Условие если bulletPosition не равен countShot тогда...
	} else {
		// Проверять равен ли currentPlayer 1 если равен тогда..
		if(currentPlayer == 1) {
			// Разворачеваем револьвер вправо и проиграл второй игрок
            rotationRight();
            currentPlayer = 2;
        // Если не равен
		} else {
			// Разворачеваем револьвер влево и проиграл первый игрок
			rotationLeft();
            currentPlayer = 1;
		}
        // В переменной rotate храниться значение rotateBaraban
        var rotate = rotateBaraban;
        // В переменной timer храниться функция setInterval
        var timer = setInterval(function() {
        	// Увеличиваем значение countShot на 10 больше
        	rotate = rotate + 10;
        	// Вращяем барабан
			baraban.style.transform = "rotate(" + rotate + "deg)";
            // Условие если rotate равени rotateBaraban + 60 тогда...
        	if(rotate == rotateBaraban + 60) {
        		// Отменяем работу таймера и присваиваем переменной rotateBaraban значение rotate
       			clearInterval(timer);
       			rotateBaraban = rotate;
        	}
        }, 10);
	}
}
// Функция рандома от 1 до 6
function random(max, min) {
	return Math.floor( Math.random() * (max - min) + min );
}
// Функция разворота револьвера вправо
function rotationRight() {
	var revolver = document.querySelector("#revolver");
	revolver.style.background = 'url("images/revolver-right.png") no-repeat';
}
// Выполняем функцию
rotationRight();
// Функция разворота револьвера влево
function rotationLeft() {
	revolver.style.background = 'url("images/revolver-left.png") no-repeat';
}
// Выполняем функию
rotationLeft();
// Функция конца игры
function endGame() {
	// Меняем текст кнопки на "Рестарт"
	btnShot.innerText = "Рестарт";
	// Клик на кнопку вызывает функию restart
	btnShot.onclick = restart;
	// Выводим модельное окно 'Конец игры'
    alert('Конец игры');
}
// функция начять сначала
function restart() {
	// Перезагружаем страницу
	location.reload();
}