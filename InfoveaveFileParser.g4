grammar InfoveaveFileParser;
 
/*
 * Parser Rules
 */
program       : (line| NEWLINE)+ EOF ;
line          : (record | subrecord | column | COMMENT | ignoreline | nextrecord | nextsubrecord | nextline | skipline) NEWLINE;
skipline      : SKIPLINE LINE BOF COLUMNIDENTIFIER ENDOFFILE COLUMNIDENTIFIER;
record        : RECORD IDENTIFIER (BEGIN|END) (COLUMNIDENTIFIER)?;
column        : COLUMN IDENTIFIER COLUMNIDENTIFIER (COLUMNIDENTIFIER|EOL) (IGNORE)?;
subrecord     : SUBRECORD IDENTIFIER (BEGIN|END) ;
ignoreline    : IGNORE LINE;
nextline      : NEXT LINE;
nextrecord    : NEXT RECORD IDENTIFIER TILL (IDENTIFIER|SPECIALCHARWORD|EMPTYLINE|ENDOFFILE)+;
nextsubrecord : NEXT SUBRECORD IDENTIFIER TILL (IDENTIFIER|SPECIALCHARWORD|EMPTYLINE)+;
/*
 * Lexer Rules
 */

fragment A          : ('A'|'a') ;
fragment B          : ('B'|'b') ;
fragment C          : ('C'|'c') ;
fragment D          : ('D'|'d') ;
fragment E          : ('E'|'e') ;
fragment F          : ('F'|'f') ;
fragment G          : ('G'|'g') ;
fragment H          : ('H'|'h') ;
fragment I          : ('I'|'i') ;
fragment J          : ('J'|'j') ;
fragment K          : ('K'|'k') ;
fragment L          : ('L'|'l') ;
fragment M          : ('M'|'m') ;
fragment N          : ('N'|'n') ;
fragment O          : ('O'|'o') ;
fragment P          : ('P'|'p') ;
fragment Q          : ('Q'|'q') ;
fragment R          : ('R'|'r') ;
fragment S          : ('S'|'s') ;
fragment T          : ('T'|'t') ;
fragment U          : ('U'|'u') ;
fragment V          : ('V'|'v') ;
fragment W          : ('W'|'w') ;
fragment X          : ('X'|'x') ;
fragment Y          : ('Y'|'y') ;
fragment Z          : ('Z'|'z') ;

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment NUMBER     : [0-9] ;
fragment SPECIALCHAR: [[\].()<>/\\:#|!@$%^&*_+'",?~`-] ;
fragment UNDERSCORE : [_] ;


RECORD              : R E C O R D ;
SKIPLINE            : S K I P ;
COLUMN              : C O L U M N ;
IGNORE              : I G N O R E ;
SUBRECORD           : S U B R E C O R D ;
EMPTYLINE           : E M P T Y L I N E;
LINE                : L I N E ;
BOF                 : B O F ;
EOL                 : E O L ;
NEXT                : N E X T ;
TILL                : T I L L ;
ENDOFFILE           : E O F;
SEMICOLON           : ';';
COLUMNIDENTIFIER    : ((NUMBER)+|(NUMBER|SPECIALCHAR|SEMICOLON)+) ;

BEGIN               : B E G I N ;
END                 : E N D ;
SPECIALCHARWORD     : SPECIALCHAR;
COMMENT        : '#' ~[\r\n]* -> skip;

IDENTIFIER          : (LOWERCASE | UPPERCASE | NUMBER |  UNDERSCORE)+ ;
WHITESPACE          : [ \t]+ -> skip ;
NEWLINE             : ('\r'? '\n' | '\r')+ ;
