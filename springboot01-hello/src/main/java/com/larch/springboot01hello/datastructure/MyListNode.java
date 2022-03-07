package com.larch.springboot01hello.datastructure;

import java.util.List;

/**
 * 单向链表的实现
 */
public class MyListNode {

    private ListNode head;
    private ListNode tail;
    private int size;

    public MyListNode() {
        ListNode listNode = new ListNode(0);
        this.head = listNode;
        this.tail = listNode;
        this.size = 0;
    }

    /**
     * 头插入
     */
    public void addAtHead(int val) {
        if (this.size == 0) {
            this.head.val = val;
        } else {
            ListNode node = new ListNode(val);
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }

    /**
     * 尾部插入
     * @param val
     */
    public void addAtTail(int val) {
        if (this.size == 0) {
            this.tail.val = val;
        } else {
            ListNode node = new ListNode(val);
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }

    /**
     * 在指定位置之前插入 节点
     * 如果index等于链表长度，将节点添加到链表的末尾
     * 大于链表长度不进行插入，index小于0在头部插入
     * @param val
     * @param index
     */
    public int addAtIndex(int val,int index) {
        if (index > this.size) {
            System.out.println("节点位置大于链表长度。。");
            return 0;
        } else if (index <= 0) {
           addAtHead(val);
        } else if (index == this.size) {
           addAtTail(val);
        } else {
            ListNode tmp = new ListNode(val);
            ListNode cur = this.head;
            for (int i = 0; i < index - 1; i ++) {
                cur = cur.next;
            }
            tmp.next = cur.next;
            cur.next = tmp;
            this.size ++;
        }
        return size;
    }

    /**
     * 遍历链表
     */
    public void foreachNode() {
        if (null == head.next) {
            System.out.println("head.next is null " + head.val);
            return;
        }
        while (null != head) {
            System.out.print("head.next = " + head.val + "\n");
            head = head.next;
        }

    }

    class ListNode {
        int val;
        // ListNode prev;
        ListNode next;

        public ListNode() {

        }
        public ListNode(int val) {
            this.val = val;
        }
    }

}
