package com.company;

import java.util.*;

class Solution1 {
    static String str;
    static int cash, n, a, b;

    static void  swap () {
        char s[] = str.toCharArray();
        int i = 0;
        for (int a = 0; a < s.length; a++)
            if (s[a] == '1') {
                i = a;
                break;
            }
        int j = s.length - 1;

        while (j > i) {
            if (cash < a)
                break;
            if (s[j] == '0') {
                if (s[i] == '0')
                    i++;
                else {
                    char temp = s[i];
                    s[i] = s[j];
                    s[j] = temp;
                    cash -= a;
                    j--;
                }
            } else
                j--;
        }
        str = new String(s);
    }

    static void flipf() {
        char s[] = str.toCharArray();
        int i = 0;

        for (int a = 0; a < s.length; a++)
            if (s[a] == '1') {
                i = a;
                break;
            }
        while (cash >= b) {
            if (i == s.length)
                break;
            if (s[i] == '1') {
                s[i] = '0';
                i++;
                cash -= b;
            }
        }
        str = new String(s);
    }
}
public class program {
    public static void main (String[]args)
    {
        Scanner sc = new Scanner (System.in);
       int n = sc.nextInt ();
        String str = sc.next ();
      int  cash = sc.nextInt ();
       int  a = sc.nextInt ();
       int b = sc.nextInt ();

        if (a < b)
        {
            swap();
            flipf();
        }
        else
        {
            flipf();
            swap();
        }
        System.out.println (Integer.parseInt (str, 2));
    }
}

