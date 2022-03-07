package com.larch.springboot01hello.datastructure;

public class NodeMail {
    public static void main(String[] args) {
        MyListNode myListNode = new MyListNode();
        myListNode.addAtHead(0);
        myListNode.addAtHead(1);
        myListNode.addAtHead(3);
        myListNode.addAtHead(4);
        myListNode.addAtHead(5);
        myListNode.addAtHead(6);

        myListNode.addAtTail(11);
        myListNode.addAtTail(12);
        myListNode.addAtTail(13);
        myListNode.addAtTail(14);

        System.out.println("-------------此处为分割线-----------");

        int size = myListNode.addAtIndex(22, 4);
        System.out.println("size = " + size);


        myListNode.foreachNode();
    }
}
