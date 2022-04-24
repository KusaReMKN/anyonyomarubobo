# nekokawauouo
ねこかわうおうお ジェネレータ

## もとになった C のコード
```c
main()
{
	int i, nekomax;
	char *nekotab[] = {
		"ねこ", "かわ", "うお", "うお",
		"ね", "こ", "か", "わ", "う", "お"
	};

	srand(time(0));
	nekomax = sizeof(nekotab) / sizeof(nekotab[0]);
	for (i = 0; i < 64; i++)
		printf("%s", nekotab[rand() % nekomax]);
	printf("\n");
}
```
